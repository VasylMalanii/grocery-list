import { z } from 'zod'

export const GrocerySchema = z.object({
  id: z.string(),
  title: z.string(),
})

export const GroceryArraySchema = z.array(GrocerySchema)
