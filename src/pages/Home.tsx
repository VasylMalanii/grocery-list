import { useTranslation } from 'react-i18next'
import GroceryListItem from '@/components/groceries/GroceryListItem.tsx'
import useGroceries from '@/hooks/api/useGroceries.tsx'
import { Skeleton } from '@/components/ui/skeleton.tsx'
import times from 'lodash.times'

export default function Home() {
  const { t } = useTranslation()

  const { data, isLoading } = useGroceries()

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <title>{t('pages.home')}</title>
      <h1 className="text-2xl font-bold mb-4">{t('home.myLists')}</h1>
      {isLoading ? (
        <>
          {times(3, (index) => (
            <Skeleton key={index} className="w-full h-[80px] rounded-xl mb-4" />
          ))}
        </>
      ) : (
        <>{data?.map((grocery) => <GroceryListItem key={grocery.id} item={grocery} />)}</>
      )}
    </div>
  )
}
