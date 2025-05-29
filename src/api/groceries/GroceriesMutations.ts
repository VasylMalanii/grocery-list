import { useMutation, useQueryClient } from '@tanstack/react-query'
import queryKeys from '@/constants/queryKeys.ts'
import { GroceriesApi } from '@/api/groceries/GroceriesApi.ts'
import type { Grocery } from '@/types/models/Grocery.ts'

type AddOrEditGroceryMutationProps = {
  item?: Grocery
  onComplete: () => void
}

export const useAddOrEditGroceryMutation = (props: AddOrEditGroceryMutationProps) => {
  const { item, onComplete } = props
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: Grocery) => (item ? GroceriesApi.updateItem(data) : GroceriesApi.createItem(data)),
    onSuccess: (data: Grocery) => {
      queryClient.setQueryData(queryKeys.groceries, (oldData: Grocery[]) => {
        if (!item) return [...oldData, data]
        return oldData.map((x) => (x.id === item.id ? data : x))
      })
      onComplete()
    },
  })
}

type UpdateGroceryMutationProps = {
  id: string
}

export const useDeleteGroceryMutation = (props: UpdateGroceryMutationProps) => {
  const { id } = props
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => GroceriesApi.deleteItem(id),
    onSuccess: () => {
      queryClient.setQueryData(queryKeys.groceries, (oldData: Grocery[]) => {
        return oldData.filter((x) => x.id !== id)
      })
    },
  })
}
