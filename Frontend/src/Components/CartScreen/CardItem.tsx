import { faPlusCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import removeCircle from "../../Assets/remove-circle-outline.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct, removeProduct } from "./CardScreenSlice";

export interface CardItemProps {
	data: {
		image: string;
		name: string;
		category: string;
		price: number;
		amount: number;
	};
}

const CardItem = ({ data }: CardItemProps) => {
	const { name, category, price, image, amount } = data;

	const dispatch = useDispatch();

	const handleAddProduct = () => {
		dispatch(addProduct(name));
	};

	const handleRemoveProduct = () => {
		dispatch(removeProduct(name));
	};

	const handleDeleteProduct = () => {
		dispatch(deleteProduct(name));
	};

	return (
		<div className="w-auto flex h-24 justify-between ">
			<img
				className="bg-grey-very-light rounded-xl w-24 h-auto p-3"
				src={image}
				alt=""
			/>

			<div className="flex flex-col">
				<p className="font-bold text-sm">{name}</p>
				<p className="opacity-30 mt-1 text-sm font-bold">{category}</p>
				<h2 className="font-extrabold text-xl mt-auto">{price}€</h2>
			</div>

			<div className="flex flex-col justify-between">
				<FontAwesomeIcon
					icon={faTimesCircle}
					onClick={handleDeleteProduct}
					className="self-end text-xl"
				/>

				<div className="flex items-center gap-2">
					<img
						src={removeCircle}
						onClick={handleRemoveProduct}
						className="w-6"
						alt=""
					/>
					<p className="font-extrabold">
						{" "}
						{amount < 10 ? `0${amount}` : amount}
					</p>
					<FontAwesomeIcon
						icon={faPlusCircle}
						onClick={handleAddProduct}
						className="text-xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default CardItem;
