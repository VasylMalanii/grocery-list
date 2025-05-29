import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router'
import ROUTES from '@/constants/routes'
import type { Grocery } from '@/types/models/Grocery'

type Props = {
  item: Grocery
}

export default function GroceryListItem(props: Props) {
  const { item } = props

  return (
    <Link to={ROUTES.groceryDetails(item.id)}>
      <Card className="hover:shadow-md hover:bg-gray-100 transition mb-4">
        <CardContent className="p-4 flex justify-between items-center">
          <CardTitle>{item.title}</CardTitle>
        </CardContent>
      </Card>
    </Link>
  )
}
