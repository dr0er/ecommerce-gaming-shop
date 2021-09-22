import { createSlice } from '@reduxjs/toolkit'

export interface MenuState {
  isOpen: boolean
}

const initialState: MenuState = {
  isOpen: false,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    handleMenuClick: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { handleMenuClick } = menuSlice.actions
export default menuSlice.reducer
