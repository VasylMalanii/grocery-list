import { configureStore, combineReducers } from '@reduxjs/toolkit'
import groceryItemsSlice from '@/store/slices/groceryItemsSlice.ts'
import groceriesSlice from '@/store/slices/groceriesSlice.ts'

const rootReducer = combineReducers({
  [groceryItemsSlice.name]: groceryItemsSlice.reducer,
  [groceriesSlice.name]: groceriesSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type StoreType = typeof store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
