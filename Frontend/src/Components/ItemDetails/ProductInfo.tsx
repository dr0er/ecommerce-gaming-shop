export interface ProductInfoProps {
	product: {
		name: string;
		shortDescription: string;
		description: string;
	};
}

const ProductInfo = ({ product }: ProductInfoProps) => {
	const { name, shortDescription, description } = product;

	return (
		<>
			<div className="flex flex-col  gap-1">
				{/* PRODUCT NAME */}

				<h1 className="text-3xl">{name}</h1>

				{/* SHORT DESCRIPTION */}

				<p className="opacity-30">{shortDescription}</p>
			</div>

			{/* DESCRIPTION */}

			<p className="tracking-tighter text-base font-bold">{description}</p>
		</>
	);
};

export default ProductInfo;
