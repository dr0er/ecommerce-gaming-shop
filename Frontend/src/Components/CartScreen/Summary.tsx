import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";

export interface SummaryProps {}

interface productProps {
	id: number;
	name: string;
	category: string;
	price: number;
	image: string;
	amount: number;
}

const Summary = () => {
	const { myProducts } = useSelector((state: RootState) => state.cartScreen);

	const handleSubtotal = () => {
		let price = 0;
		myProducts.forEach((product: productProps) => {
			price += product.price * product.amount;
		});
		return price;
	};

	const handleBagTotal = () => {
		let price = handleSubtotal();
		const shippingPrice = 5;
		price += shippingPrice;
		return price;
	};

	const productsAmount = () => {
		let amount = 0;
		myProducts.forEach((product) => {
			amount += product.amount;
		});
		return amount;
	};

	return (
		<div className="flex flex-col mt-16 gap-6">
			<div className="flex justify-between">
				<p className="opacity-30 font-bold">Subtotal</p>
				<h2 className="text-grey-light font-extrabold text-xl">
					{handleSubtotal()}€
				</h2>
			</div>
			<div className="flex justify-between">
				<p className="opacity-30 font-bold">Shipping</p>
				<h2 className="text-grey-light font-extrabold text-xl">5€</h2>
			</div>
			<div className="flex justify-between">
				<p className="opacity-30 font-bold">Bag total</p>
				<div className="flex gap-5 align-middle">
					<span className="font-medium">({productsAmount()} items)</span>
					<h2 className="text-grey-light font-extrabold text-xl">
						{handleBagTotal()}€
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Summary;
