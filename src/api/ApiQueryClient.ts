import { QueryClient } from '@tanstack/react-query'

const ApiQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 0,
      refetchOnWindowFocus: false,
    },
  },
})

export default ApiQueryClient
