import Router from '@/app/Router'
import '@/lib/i18n/i18n'
import { QueryClientProvider } from '@tanstack/react-query'
import ApiQueryClient from '@/api/ApiQueryClient.ts'
import { Provider } from 'react-redux'
import { store } from '@/store/store.ts'

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={ApiQueryClient}>
        <Router />
      </QueryClientProvider>
    </Provider>
  )
}

export default App
