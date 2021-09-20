import { createSlice } from "@reduxjs/toolkit";
export interface ProductProps {
	id: number;
	name: string;
	category: string;
	price: number;
	image: string;
	amount: number;
}

interface CartScreenSliceState {
	myProducts: ProductProps[];
}

const initialState: CartScreenSliceState = {
	myProducts: [],
};

export const CartScreenSlice = createSlice({
	name: "cartScreen",
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.myProducts = action.payload;
		},

		addProduct: (state, action) => {
			const product = state.myProducts.find(
				(product) => product.id === action.payload
			);
			if (product && product.amount) {
				product.amount = product.amount + 1;
			}
		},

		removeProduct: (state, action) => {
			const product = state.myProducts.find(
				(product) => product.id === action.payload
			);

			if (product && product.amount > 1) {
				product.amount = product.amount - 1;
			} else if (product?.amount === 1) {
				state.myProducts = state.myProducts.filter(
					(currentProduct) => currentProduct.id !== product.id
				);
			}
		},

		deleteProduct: (state, action) => {
			state.myProducts = state.myProducts.filter(
				(prodcut) => prodcut.id !== action.payload
			);
		},
	},
});

// Action creators are generated for each case reducer function
export const { setProducts, addProduct, removeProduct, deleteProduct } =
	CartScreenSlice.actions;

export default CartScreenSlice.reducer;
