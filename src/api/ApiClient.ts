import axios from 'axios'

const ApiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
// No point of using interceptors with json-server
// apiClient.interceptors.request.use(
//   async (config) => {
//     return config
//   },
//   (error) => Promise.reject(error)
// )
// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     return Promise.reject(error)
//   }
// )

export default ApiClient
