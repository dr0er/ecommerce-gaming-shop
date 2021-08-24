export interface PriceAndRatingProps {
	product: {
		price: string;
		inStock: string;
		rating: string;
	};
}

const PriceAndRating: React.SFC<PriceAndRatingProps> = ({ product }) => {
	const { price, inStock, rating } = product;

	return (
		<div className="flex justify-between mt-4">
			{/* PRICE */}

			<div className="flex flex-col ">
				<p className="opacity-30">Price:</p>
				<h1 className="text-3xl">{price}</h1>
			</div>

			{/* RATING */}

			<div className="flex flex-col justify-between text-right">
				<p>{inStock} in stock</p>
				<p className="opacity-30">
					Reviews <span className="opacity-100">{rating}</span>
					/5
				</p>
			</div>
		</div>
	);
};

export default PriceAndRating;
