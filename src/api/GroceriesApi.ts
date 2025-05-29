import type { Grocery } from '@/types/models/Grocery'
import ApiClient from '@/api/ApiClient'
import { GroceryArraySchema } from '@/schemas/GrocerySchema'

export const GroceriesApi = {
  async getItems(): Promise<Grocery[]> {
    const response = await ApiClient.get<Grocery[]>(`/lists`)
    return GroceryArraySchema.parse(response.data)
  },
}
