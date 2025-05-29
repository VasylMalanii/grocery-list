import Router from '@/app/Router'
import '@/lib/i18n/i18n'
import { QueryClientProvider } from '@tanstack/react-query'
import ApiQueryClient from '@/api/ApiQueryClient'

function App() {
  return (
    <QueryClientProvider client={ApiQueryClient}>
      <Router />
    </QueryClientProvider>
  )
}

export default App
