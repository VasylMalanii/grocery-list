import ApiClient from '@/api/ApiClient.ts'
import type { GroceryItem } from '@/types/models/GroceryItem.ts'
import { GroceryItemArraySchema, GroceryItemSchema } from '@/schemas/GroceryItemSchema.ts'

export const GroceryItemsApi = {
  async getItems(groceryId: string): Promise<GroceryItem[]> {
    const response = await ApiClient.get<GroceryItem[]>(`/items?listId=${groceryId}`)
    return GroceryItemArraySchema.parse(response.data)
  },
  async createItem(item: GroceryItem): Promise<GroceryItem> {
    const response = await ApiClient.post<GroceryItem>(`/items`, item)
    return GroceryItemSchema.parse(response.data)
  },
  async updateItem(item: Partial<GroceryItem>): Promise<GroceryItem> {
    const response = await ApiClient.patch<GroceryItem>(`/items/${item.id}`, item)
    return GroceryItemSchema.parse(response.data)
  },
  async deleteItem(itemId: string): Promise<void> {
    const response = await ApiClient.delete(`/items/${itemId}`)
    return response.data
  },
}
