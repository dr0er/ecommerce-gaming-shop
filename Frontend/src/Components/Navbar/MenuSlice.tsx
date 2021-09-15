import { createSlice } from "@reduxjs/toolkit";

interface State {
	isMenu: boolean;
}

const initialState: State = {
	isMenu: false,
};

const MenuSlice = createSlice({
	name: "MenuSlice",
	initialState,
	reducers: {
		setIsMenu: (state, action) => {
			state.isMenu = action.payload;
		},
	},
});

export const { setIsMenu } = MenuSlice.actions;
export default MenuSlice.reducer;
