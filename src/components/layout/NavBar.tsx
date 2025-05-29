import { Link } from 'react-router'
import ROUTES from '@/constants/routes'
import { useTranslation } from 'react-i18next'

export default function NavBar() {
  const { t } = useTranslation()

  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={ROUTES.home()} className="font-bold text-lg">
          {t('title')}
        </Link>
      </div>
    </header>
  )
}
