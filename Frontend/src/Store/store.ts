import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "../Components/Navbar/MenuSlice";

export const store = configureStore({
	reducer: {
		menuSlice: MenuSlice,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
