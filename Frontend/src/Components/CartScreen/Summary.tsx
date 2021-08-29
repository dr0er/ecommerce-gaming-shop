export interface SummaryProps {}

const Summary: React.SFC<SummaryProps> = () => {
	return (
		<div className="flex flex-col mt-16 gap-6">
			<div className="flex justify-between">
				<p className="opacity-30 font-bold">Subtotal</p>
				<h2 className="text-grey-light font-extrabold text-xl">198€</h2>
			</div>
			<div className="flex justify-between">
				<p className="opacity-30 font-bold">Shipping</p>
				<h2 className="text-grey-light font-extrabold text-xl">5€</h2>
			</div>
			<div className="flex justify-between">
				<p className="opacity-30 font-bold">Bag total</p>
				<div className="flex gap-5 align-middle">
					<span className="font-medium">(3 items)</span>
					<h2 className="text-grey-light font-extrabold text-xl">203€</h2>
				</div>
			</div>
		</div>
	);
};

export default Summary;
