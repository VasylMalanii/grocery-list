import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useTranslation } from 'react-i18next'

type Props = React.PropsWithChildren & {
  title?: string
  message?: string
  onOk: () => void
  disabled?: boolean
}

export default function AlertModal(props: Props) {
  const { t } = useTranslation()
  const { title = t('alertDialog.title'), message = t('alertDialog.message'), children, onOk, disabled } = props

  return (
    <AlertDialog>
      <AlertDialogTrigger disabled={disabled}>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t('alertDialog.cancel')}</AlertDialogCancel>
          <AlertDialogAction onClick={onOk}>{t('alertDialog.ok')}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
