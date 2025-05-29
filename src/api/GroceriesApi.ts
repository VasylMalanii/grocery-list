import type { Grocery } from '@/types/models/Grocery.ts'
import ApiClient from '@/api/ApiClient.ts'
import { GroceryArraySchema } from '@/schemas/GrocerySchema.ts'

export const GroceriesApi = {
  async getItems(): Promise<Grocery[]> {
    const response = await ApiClient.get<Grocery[]>(`/lists`)
    return GroceryArraySchema.parse(response.data)
  },
}
