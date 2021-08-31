import { createSlice } from "@reduxjs/toolkit";
interface productProps {
	name: string;
	category: string;
	price: number;
	image: string;
	amount: number;
}
const initialState = {
	myProducts: [] as productProps[],
};

export const CardScreenSlice = createSlice({
	name: "cardScreen",
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.myProducts = action.payload;
		},

		addProduct: (state, action) => {
			//  HERE NEED ID FROM API | NEED TO BE CHANGE IN THE FUTURE
			const product = state.myProducts.find(
				(product) => product.name === action.payload
			);
			if (product && product.amount) {
				product.amount = product.amount + 1;
			}
		},

		removeProduct: (state, action) => {
			//  HERE NEED ID FROM API | NEED TO BE CHANGE IN THE FUTURE

			const product = state.myProducts.find(
				(product) => product.name === action.payload
			);

			if (product && product.amount > 1) {
				product.amount = product.amount - 1;
			}
		},

		deleteProduct: (state, action) => {
			//  HERE NEED ID FROM API | NEED TO BE CHANGE IN THE FUTURE

			state.myProducts = state.myProducts.filter(
				(prodcut) => prodcut.name !== action.payload
			);
		},
	},
});

// Action creators are generated for each case reducer function
export const { setProducts, addProduct, removeProduct, deleteProduct } =
	CardScreenSlice.actions;

export default CardScreenSlice.reducer;
