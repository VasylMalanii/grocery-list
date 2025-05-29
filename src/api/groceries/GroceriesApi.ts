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
}
