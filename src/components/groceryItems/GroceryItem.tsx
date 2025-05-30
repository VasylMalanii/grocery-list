import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Pencil, Trash } from 'lucide-react'
import type { GroceryItem } from '@/types/models/GroceryItem.ts'
import { cn } from '@/lib/utils.ts'
import { useAppDispatch, useAppSelector } from '@/hooks/redux.ts'
import groceryItemsSlice from '@/store/slices/groceryItemsSlice.ts'
import GroceryItemForm from '@/components/groceryItems/GroceryItemForm.tsx'
import React, { useCallback } from 'react'
import { useDeleteGroceryItemMutation, useToggleGroceryItemMutation } from '@/api/groceryItems/GroceryItemsMutations.ts'
import type { CheckedState } from '@radix-ui/react-checkbox'
import AlertModal from '@/components/shared/AlertModal.tsx'

type Props = {
  groceryId: string
  item: GroceryItem
}

function GroceryItem(props: Props) {
  const { item, groceryId } = props
  const isDisabledEditing = useAppSelector(groceryItemsSlice.selectors.isDisabledEditing)
  const editItemId = useAppSelector(groceryItemsSlice.selectors.selectEditableItemId)
  const dispatch = useAppDispatch()

  const toggleMutation = useToggleGroceryItemMutation({
    groceryId,
    itemId: item.id,
  })

  const deleteMutation = useDeleteGroceryItemMutation({
    groceryId,
    itemId: item.id,
  })

  const onEditItemComplete = useCallback(() => {
    dispatch(groceryItemsSlice.actions.setEditItem(undefined))
  }, [dispatch])

  const onToggle = (value: CheckedState) => toggleMutation.mutate(!!value)

  const onEdit = () => dispatch(groceryItemsSlice.actions.setEditItem(item.id))

  const onDelete = () => deleteMutation.mutate()

  if (editItemId === item.id) {
    return (
      <GroceryItemForm
        groceryId={groceryId}
        item={item}
        onComplete={onEditItemComplete}
      />
    )
  }

  return (
    <Card className={cn('py-2 mb-3', { 'bg-gray-200': item.isBought })}>
      <CardContent className="flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Checkbox
            checked={item.isBought}
            onCheckedChange={onToggle}
          />
          <div>
            <p className={cn('text-lg', { 'line-through': item.isBought })}>{item.text}</p>
            <p className={cn('text-gray-600 italic', { 'line-through': item.isBought })}>{item.amount}</p>
          </div>
        </div>
        <div className="flex gap-0 max-sm:flex-col">
          <Button
            size="icon"
            variant="ghost"
            disabled={isDisabledEditing}
            onClick={onEdit}
          >
            <Pencil size={16} />
          </Button>
          <AlertModal
            onOk={onDelete}
            disabled={isDisabledEditing}
          >
            <Button
              size="icon"
              variant="ghost"
              disabled={isDisabledEditing}
            >
              <Trash size={16} />
            </Button>
          </AlertModal>
        </div>
      </CardContent>
    </Card>
  )
}

export default React.memo(GroceryItem)
