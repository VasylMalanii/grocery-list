import { useMutation, useQueryClient } from '@tanstack/react-query'
import queryKeys from '@/constants/queryKeys.ts'
import { GroceryItemsApi } from '@/api/groceryItems/GroceryItemsApi.ts'
import type { GroceryItem } from '@/types/models/GroceryItem.ts'

type ToggleGroceryItemMutationProps = {
  groceryId: string
  itemId: string
}

export const useToggleGroceryItemMutation = (props: ToggleGroceryItemMutationProps) => {
  const { groceryId, itemId } = props
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (isBought: boolean) =>
      GroceryItemsApi.updateItem({
        id: itemId,
        isBought,
      }),
    onSuccess: () => {
      queryClient.setQueryData(queryKeys.groceryItems(groceryId), (oldData: GroceryItem[]) => {
        return oldData.map((x) => (x.id === itemId ? { ...x, isBought: !x.isBought } : x))
      })
    },
  })
}

export const useDeleteGroceryItemMutation = (props: ToggleGroceryItemMutationProps) => {
  const { groceryId, itemId } = props
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => GroceryItemsApi.deleteItem(itemId),
    onSuccess: () => {
      queryClient.setQueryData(queryKeys.groceryItems(groceryId), (oldData: GroceryItem[]) => {
        return oldData.filter((x) => x.id !== itemId)
      })
    },
  })
}

type AddOrEditGroceryItemMutationProps = {
  groceryId: string
  item?: GroceryItem
  onComplete: () => void
}

export const useAddOrEditGroceryItemMutation = (props: AddOrEditGroceryItemMutationProps) => {
  const { groceryId, item, onComplete } = props
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: GroceryItem) => (item ? GroceryItemsApi.updateItem(data) : GroceryItemsApi.createItem(data)),
    onSuccess: (data: GroceryItem) => {
      queryClient.setQueryData(queryKeys.groceryItems(groceryId), (oldData: GroceryItem[]) => {
        if (!item) return [...oldData, data]
        return oldData.map((x) => (x.id === item.id ? data : x))
      })
      onComplete()
    },
  })
}
