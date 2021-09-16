import { createSlice } from "@reduxjs/toolkit";

interface MenuSliceProps {
	isMenu: boolean;
}

const initialState: MenuSliceProps = {
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
