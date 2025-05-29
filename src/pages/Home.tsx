import { useTranslation } from 'react-i18next'
import GroceryListItem from '@/components/groceries/GroceryListItem'
import SkeletonList from '@/components/shared/SkeletonList.tsx'
import { useGroceries } from '@/api/groceries/GroceriesQueries.ts'
import { useAppDispatch, useAppSelector } from '@/hooks/redux.ts'
import { useCallback } from 'react'
import groceriesSlice from '@/store/slices/groceriesSlice.ts'
import { Button } from '@/components/ui/button.tsx'
import { Plus } from 'lucide-react'
import GroceryForm from '@/components/groceries/GroceryForm.tsx'

export default function Home() {
  const { t } = useTranslation()

  const { data, isLoading } = useGroceries()

  const dispatch = useAppDispatch()
  const isAdding = useAppSelector(groceriesSlice.selectors.isAddingNewItem)
  const isDisabledEditing = useAppSelector(groceriesSlice.selectors.isDisabledEditing)

  const onAdd = useCallback(() => {
    dispatch(groceriesSlice.actions.setAddNewItem(true))
  }, [dispatch])

  const onAddComplete = useCallback(() => {
    dispatch(groceriesSlice.actions.setAddNewItem(false))
  }, [dispatch])

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <title>{t('pages.home')}</title>
      <h1 className="text-2xl font-bold mb-4">{t('home.myLists')}</h1>
      {isLoading ? (
        <SkeletonList count={3} />
      ) : (
        <>
          {data?.map((grocery) => (
            <GroceryListItem
              key={grocery.id}
              item={grocery}
            />
          ))}
          {isAdding ? (
            <GroceryForm onComplete={onAddComplete} />
          ) : (
            <Button
              className="mt-1"
              onClick={onAdd}
              disabled={isDisabledEditing}
            >
              <Plus
                className="mr-2"
                size={16}
              />{' '}
              {t('home.addList')}
            </Button>
          )}
        </>
      )}
    </div>
  )
}
