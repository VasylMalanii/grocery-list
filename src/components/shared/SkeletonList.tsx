import { Skeleton } from '@/components/ui/skeleton'
import times from 'lodash.times'

type Props = {
  count: number
}

export default function SkeletonList(props: Props) {
  const { count } = props

  return (
    <>
      {times(count, (index) => (
        <Skeleton
          key={index}
          className="w-full h-[80px] rounded-xl mb-4"
        />
      ))}
    </>
  )
}
