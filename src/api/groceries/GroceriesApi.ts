import type { Grocery } from '@/types/models/Grocery.ts'
import ApiClient from '@/api/ApiClient.ts'
import { GroceryArraySchema, GrocerySchema } from '@/schemas/GrocerySchema.ts'

export const GroceriesApi = {
  async getItems(): Promise<Grocery[]> {
    const response = await ApiClient.get<Grocery[]>(`/lists`)
    return GroceryArraySchema.parse(response.data)
  },
  async getItem(id: string): Promise<Grocery> {
    const response = await ApiClient.get<Grocery>(`/lists/${id}`)
    return GrocerySchema.parse(response.data)
  },
  async createItem(item: Grocery): Promise<Grocery> {
    const response = await ApiClient.post<Grocery>(`/lists`, item)
    return GrocerySchema.parse(response.data)
  },
  async updateItem(item: Partial<Grocery>): Promise<Grocery> {
    const response = await ApiClient.patch<Grocery>(`/lists/${item.id}`, item)
    return GrocerySchema.parse(response.data)
  },
  async deleteItem(itemId: string): Promise<void> {
    const response = await ApiClient.delete(`/lists/${itemId}`)
    return response.data
  },
}
