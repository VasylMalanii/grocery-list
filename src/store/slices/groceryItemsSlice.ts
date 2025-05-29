import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type GroceryItemsSliceState = {
  isAddingNewItem: boolean
  editableItemId?: string
}

const defaultState: GroceryItemsSliceState = {
  isAddingNewItem: false,
}

const groceryItemsSlice = createSlice({
  name: 'groceryItems',
  initialState: defaultState,
  reducers: {
    setAddNewItem(state, action: PayloadAction<boolean>) {
      state.isAddingNewItem = action.payload
    },
    setEditItem(state, action: PayloadAction<string | undefined>) {
      state.editableItemId = action.payload
    },
  },
  selectors: {
    isAddingNewItem: (state) => state.isAddingNewItem,
    selectEditableItemId: (state) => state.editableItemId,
    isDisabledEditing: (state) => state.isAddingNewItem || !!state.editableItemId,
  },
})

export default groceryItemsSlice
