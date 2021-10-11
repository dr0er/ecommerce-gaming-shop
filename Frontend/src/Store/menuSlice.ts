import { createSlice } from '@reduxjs/toolkit'

export interface MenuState {
  isOpen: boolean
  isVisible: boolean
}

const initialState: MenuState = {
  isOpen: false,
  isVisible: false,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    handleMenuClick: (state) => {
      state.isOpen = !state.isOpen
    },
    toggleComponent: (state) => {
      state.isVisible = !state.isVisible
    },
  },
})

export const { handleMenuClick, toggleComponent } = menuSlice.actions
export default menuSlice.reducer
