import { useTranslation } from 'react-i18next'
import { CircleOff } from 'lucide-react'

type Props = {
  message?: string
}

export default function ErrorPage(props: Props) {
  const { message } = props
  const { t } = useTranslation()

  return (
    <div className="p-8 flex flex-col items-center justify-center w-full">
      <CircleOff
        className="mr-2 text-blue-900"
        size={80}
      />
      <h1 className="text-2xl font-bold mb-4 text-blue-900">{t('errorOccurred')}</h1>
      {message && <p className="font-bold mb-4">{message}</p>}
    </div>
  )
}
