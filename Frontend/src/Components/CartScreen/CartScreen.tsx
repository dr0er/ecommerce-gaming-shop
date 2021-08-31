import { useState } from "react";
import ninjaImage from "../../Assets/ninja.png";
import zowieImage from "../../Assets/zowie.png";
import CardItem from "./CardItem";
import Summary from "./Summary";

export interface CardScreenProps {
	myProducts: {
		name: string;
		category: string;
		price: number;
		image: string;
		amount: number;
	};
	createCardList: JSX.Element[];
}

const CardScreen = () => {
	const [myProducts, setMyProducts] = useState([
		{
			name: "Ninja mouse",
			category: "Gaming mouse",
			price: 40,
			image: ninjaImage,
			amount: 1,
		},
		{
			name: "Zowie S1",
			category: "Gaming mouse",
			price: 79,
			image: zowieImage,
			amount: 2,
		},
	]);

	const createCardList = myProducts.map((product) => (
		<CardItem data={product} />
	));

	return (
		<div className="flex flex-col text-grey-light px-6 max-w-sm bg-background-grey min-h-screen sm: mx-auto">
			<h1 className="text-3xl font-extrabold py-5">My card</h1>

			{/* Item list */}
			<div className="flex flex-col gap-8">{createCardList}</div>

			<Summary />

			{/* Checkout button */}

			<div className="bg-grey-light px-3 text-sm mt-12 py-3 font-bold text-red-50 flex justify-center rounded-2xl">
				Procced To Checkout
			</div>
		</div>
	);
};

export default CardScreen;
