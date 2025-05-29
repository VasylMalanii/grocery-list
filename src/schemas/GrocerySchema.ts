import { z } from 'zod'

export const GrocerySchema = z.object({
  id: z.string(),
  title: z.string().nonempty().min(3).max(256).trim(),
})

export const GroceryArraySchema = z.array(GrocerySchema)
