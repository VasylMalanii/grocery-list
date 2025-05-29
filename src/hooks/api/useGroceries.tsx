import { useQuery } from '@tanstack/react-query'
import { GroceriesApi } from '@/api/GroceriesApi'
import type { Grocery } from '@/types/models/Grocery'

export default function useGroceries() {
  return useQuery<Grocery[]>({
    queryKey: ['groceries'],
    queryFn: GroceriesApi.getItems,
  })
}
