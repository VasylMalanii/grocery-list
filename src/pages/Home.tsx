import { useTranslation } from 'react-i18next'
import GroceryListItem from '@/components/groceries/GroceryListItem'
import SkeletonList from '@/components/shared/SkeletonList.tsx'
import { useGroceries } from '@/api/groceries/GroceriesQueries.ts'

export default function Home() {
  const { t } = useTranslation()

  const { data, isLoading } = useGroceries()

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
        </>
      )}
    </div>
  )
}
