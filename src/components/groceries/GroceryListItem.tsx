import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router'
import ROUTES from '@/constants/routes'
import type { Grocery } from '@/types/models/Grocery'
import { useDeleteGroceryMutation } from '@/api/groceries/GroceriesMutations.ts'
import { Button } from '@/components/ui/button.tsx'
import { Pencil, Trash } from 'lucide-react'
import { type MouseEvent, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/redux.ts'
import groceriesSlice from '@/store/slices/groceriesSlice.ts'
import GroceryForm from '@/components/groceries/GroceryForm.tsx'

type Props = {
  item: Grocery
}

export default function GroceryListItem(props: Props) {
  const { item } = props
  const isDisabledEditing = useAppSelector(groceriesSlice.selectors.isDisabledEditing)
  const editItemId = useAppSelector(groceriesSlice.selectors.selectEditableItemId)
  const dispatch = useAppDispatch()

  const deleteMutation = useDeleteGroceryMutation({
    id: item.id,
  })

  const onEditComplete = useCallback(() => {
    dispatch(groceriesSlice.actions.setEditItem(undefined))
  }, [dispatch])

  const onEdit = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    event.preventDefault()
    dispatch(groceriesSlice.actions.setEditItem(item.id))
  }

  const onDelete = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    event.preventDefault()
    deleteMutation.mutate()
  }

  if (editItemId === item.id) {
    return (
      <GroceryForm
        item={item}
        onComplete={onEditComplete}
      />
    )
  }

  return (
    <Link to={ROUTES.groceryDetails(item.id)}>
      <Card className="hover:shadow-md hover:bg-gray-100 transition mb-4 p-0">
        <CardContent className="p-4 flex justify-between items-center">
          <CardTitle>{item.title}</CardTitle>
          <div className="flex gap-0 max-sm:flex-col">
            <Button
              size="icon"
              variant="ghost"
              disabled={isDisabledEditing}
              onClick={onEdit}
            >
              <Pencil size={16} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={onDelete}
              disabled={isDisabledEditing}
            >
              <Trash size={16} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
