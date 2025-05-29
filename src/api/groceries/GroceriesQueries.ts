import { useQuery } from '@tanstack/react-query'
import { GroceriesApi } from '@/api/groceries/GroceriesApi.ts'
import type { Grocery } from '@/types/models/Grocery'
import queryKeys from '@/constants/queryKeys.ts'

export function useGroceries() {
  return useQuery<Grocery[]>({
    queryKey: queryKeys.groceries,
    queryFn: GroceriesApi.getItems,
  })
}

export function useGrocery(id: string) {
  return useQuery<Grocery>({
    queryKey: queryKeys.grocery(id),
    queryFn: () => GroceriesApi.getItem(id),
  })
}
