import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X, Check } from 'lucide-react'
import type { GroceryItem } from '@/types/models/GroceryItem.ts'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { GroceryItemSchema } from '@/schemas/GroceryItemSchema.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import InputField from '@/components/form/InputField.tsx'
import { useTranslation } from 'react-i18next'
import { Form } from '@/components/ui/form.tsx'
import React from 'react'
import { useAddOrEditGroceryItemMutation } from '@/api/groceryItems/GroceryItemsMutations.ts'

type Props = {
  groceryId: string
  item?: GroceryItem
  onComplete: () => void
}

function GroceryItemForm(props: Props) {
  const { groceryId, onComplete, item } = props
  const { t } = useTranslation()

  const form = useForm<GroceryItem>({
    defaultValues: item || {
      id: nanoid(),
      text: '',
      isBought: false,
      listId: groceryId,
    },
    resolver: zodResolver(GroceryItemSchema),
  })
  const { handleSubmit, control } = form

  const mutation = useAddOrEditGroceryItemMutation({
    groceryId,
    item,
    onComplete,
  })

  const onSubmit = handleSubmit((data: GroceryItem) => {
    mutation.mutate(data)
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <Card className="py-2 mb-3">
          <CardContent className="flex items-start justify-between px-4 py-2 max-sm:flex-col max-sm:items-stretch">
            <div className="flex items-start gap-4 grow-1 mr-2 max-sm:flex-col">
              <InputField
                control={control}
                name="text"
                placeholder={t('groceryDetails.enterYourText')}
                className="w-full"
              />
              <InputField
                control={control}
                name="amount"
                placeholder={t('groceryDetails.amount')}
                type="number"
                className="max-sm:w-full"
              />
            </div>
            <div className="flex gap-0 max-sm:mt-2 max-sm:self-end">
              <Button
                size="icon"
                variant="ghost"
                type="button"
                onClick={onComplete}
              >
                <X size={16} />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                type="submit"
              >
                <Check size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  )
}

export default React.memo(GroceryItemForm)
