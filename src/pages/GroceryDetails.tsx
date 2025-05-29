import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import GroceryItem from '@/components/groceryItems/GroceryItem.tsx'
import GroceryItemForm from '@/components/groceryItems/GroceryItemForm.tsx'
import { useAppDispatch, useAppSelector } from '@/hooks/redux.ts'
import groceryItemsSlice from '@/store/slices/groceryItemsSlice.ts'
import ErrorPage from '@/components/shared/ErrorPage.tsx'
import SkeletonList from '@/components/shared/SkeletonList.tsx'
import { useCallback } from 'react'
import { useGrocery } from '@/api/groceries/GroceriesQueries.ts'
import useGroceryItems from '@/api/groceryItems/GroceryItemsQueries.ts'

export default function GroceryDetails() {
  const { t } = useTranslation()
  const { id } = useParams()
  const groceryId = id ?? ''

  const { data: grocery, error: groceryError } = useGrocery(groceryId)
  const { data: items, isLoading: isLoadingItems } = useGroceryItems(groceryId)

  const dispatch = useAppDispatch()
  const isAdding = useAppSelector(groceryItemsSlice.selectors.isAddingNewItem)
  const isDisabledEditing = useAppSelector(groceryItemsSlice.selectors.isDisabledEditing)

  const onAddItem = useCallback(() => {
    dispatch(groceryItemsSlice.actions.setAddNewItem(true))
  }, [dispatch])

  const onAddItemComplete = useCallback(() => {
    dispatch(groceryItemsSlice.actions.setAddNewItem(false))
  }, [dispatch])

  if (!groceryId || groceryError) {
    return <ErrorPage message={groceryError?.message} />
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {grocery && (
        <>
          <title>{grocery.title}</title>
          <h1 className="text-2xl font-bold mb-4">{grocery.title}</h1>
        </>
      )}
      {isLoadingItems ? (
        <SkeletonList count={3} />
      ) : (
        <div className="space-y-4">
          {items?.map((item) => (
            <GroceryItem
              key={item.id}
              item={item}
              groceryId={groceryId}
            />
          ))}
          {isAdding ? (
            <GroceryItemForm
              groceryId={groceryId}
              onComplete={onAddItemComplete}
            />
          ) : (
            <Button
              className="mt-1"
              onClick={onAddItem}
              disabled={isDisabledEditing}
            >
              <Plus
                className="mr-2"
                size={16}
              />{' '}
              {t('groceryDetails.addItem')}
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
