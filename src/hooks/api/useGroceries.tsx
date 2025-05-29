import { useQuery } from '@tanstack/react-query'
import { GroceriesApi } from '@/api/GroceriesApi.ts'
import type { Grocery } from '@/types/models/Grocery.ts'

export default function useGroceries() {
  return useQuery<Grocery[]>({
    queryKey: ['groceries'],
    queryFn: GroceriesApi.getItems,
  })
}
