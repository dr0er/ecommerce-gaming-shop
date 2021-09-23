import { configureStore } from '@reduxjs/toolkit'
import CartScreenSlice from '../Components/CartScreen/CartScreenSlice'
import menu from './menuSlice'

export const store = configureStore({
  reducer: {
    cartScreen: CartScreenSlice,
    menu,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
