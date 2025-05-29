import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X, Check } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { zodResolver } from '@hookform/resolvers/zod'
import InputField from '@/components/form/InputField.tsx'
import { useTranslation } from 'react-i18next'
import { Form } from '@/components/ui/form.tsx'
import React from 'react'
import { useAddOrEditGroceryMutation } from '@/api/groceries/GroceriesMutations.ts'
import type { Grocery } from '@/types/models/Grocery.ts'
import { GrocerySchema } from '@/schemas/GrocerySchema.ts'

type Props = {
  item?: Grocery
  onComplete: () => void
}

function GroceryForm(props: Props) {
  const { onComplete, item } = props
  const { t } = useTranslation()

  const form = useForm<Grocery>({
    defaultValues: item || {
      id: nanoid(),
      title: '',
    },
    resolver: zodResolver(GrocerySchema),
  })
  const { handleSubmit, control } = form

  const mutation = useAddOrEditGroceryMutation({
    item,
    onComplete,
  })

  const onSubmit = handleSubmit((data: Grocery) => {
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
                name="title"
                placeholder={t('home.title')}
                className="w-full"
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

export default React.memo(GroceryForm)
