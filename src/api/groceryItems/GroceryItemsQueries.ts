import { useQuery } from '@tanstack/react-query'
import { GroceryItemsApi } from '@/api/groceryItems/GroceryItemsApi.ts'
import type { GroceryItem } from '@/types/models/GroceryItem.ts'
import queryKeys from '@/constants/queryKeys.ts'

export default function useGroceryItems(id: string) {
  return useQuery<GroceryItem[]>({
    queryKey: queryKeys.groceryItems(id),
    queryFn: () => GroceryItemsApi.getItems(id),
  })
}
