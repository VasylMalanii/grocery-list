import { z } from 'zod'

export const GroceryItemSchema = z.object({
  id: z.string(),
  text: z.string().nonempty().min(3).max(256).trim(),
  amount: z.number().gt(0).optional(),
  isBought: z.boolean(),
  listId: z.string(),
})

export const GroceryItemArraySchema = z.array(GroceryItemSchema)
