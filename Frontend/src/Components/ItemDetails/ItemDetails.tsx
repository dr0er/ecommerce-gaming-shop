import {
	faChevronLeft,
	faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import Image from "./Image";
import ImageDot from "./ImageDot";
import mouse from "../../Assets/mouse.png";
import Review from "./Review";
import ImageWrapper from "./ImageWrapper";
import ProductInfo from "./ProductInfo";
import PriceAndRating from "./PriceAndRating";

export interface ItemDetailsProps {
	currentImage: number;
}

const ItemDetails = () => {
	const [currentImage, setCurrentImage] = useState(0);

	const [product, setProduct] = useState({
		name: "Xtrfy M4",
		shortDescription: "Ultra-light gaming mouse",
		description:
			"The M4 is the first ultra-light gaming mouse with an ergonomic, right-handed design – uniquely constructed to weigh less without compromising on shape and feel. Formed by feedback from professional esporters as well as casual gamers, the result is a brand new shape and size.",
		price: "49.99€",
		inStock: "42",
		rating: "4.9",
		images: [mouse, mouse, mouse],
		reviews: [
			{
				customer: "Janusz Tracz",
				rate: "4",
				added: "3 days ago",
				opinion:
					"Mauris finibus lorem sit amet urna congue lacinia. Sed pharetra metus non risus facilisis, sed bibendum orci malesuada. Quisque orci lectus, porta quis malesuada sit amet, consequat quis purus. Vestibulum non ex ac nisi cursus mollis quis sit amet risus. Quisque id hendrerit ligula, quis fermentum libero.",
			},
			{
				customer: "John",
				rate: "2",
				added: "23 days ago",
				opinion:
					"Vestibulum non ex ac nisi cursus mollis quis sit amet risus@!@!@!",
			},
			{
				customer: "Uvuvwevwevwe",
				rate: "5",
				added: "a year ago",
				opinion: "ok",
			},
		],
	});

	if (!product) return null;

	const handleChangeImage = (image: number) => {
		setCurrentImage(image);
	};

	const renderBackButton = () => {
		return (
			<Link to="/">
				<div className="flex gap-5 items-center text-base font-medium">
					<FontAwesomeIcon icon={faChevronLeft} />
					Back to mice
				</div>
			</Link>
		);
	};

	const RenderImageWrapper = () => {
		const swipeable = useSwipeable({
			onSwipedRight: () => {
				setCurrentImage((prev) => {
					if (prev > 0) {
						return prev - 1;
					} else {
						return prev;
					}
				});
			},
			onSwipedLeft: () => {
				setCurrentImage((prev) => {
					if (prev < product.images.length - 1) {
						return prev + 1;
					} else {
						return prev;
					}
				});
			},
		});

		const createImages = product.images.map((image, index) => {
			if (index === currentImage) {
				return <Image src={image} key={index} current />;
			} else {
				return <Image src={image} key={index} />;
			}
		});

		const createImageDots = product.images.map((image, index) => {
			if (currentImage === index) {
				return (
					<ImageDot
						active
						key={index}
						onClick={() => handleChangeImage(index)}
					/>
				);
			} else {
				return (
					<ImageDot key={index} onClick={() => handleChangeImage(index)} />
				);
			}
		});

		return (
			<ImageWrapper
				swipeable={swipeable}
				currentImage={currentImage}
				createImages={createImages}
				createImageDots={createImageDots}
			/>
		);
	};

	const renderProductInfo = () => {
		return <ProductInfo product={product} />;
	};

	const renderPriceAndRating = () => {
		return <PriceAndRating product={product} />;
	};

	const renderBuyButton = () => {
		return (
			<div className="flex mx-auto rounded-full bg-grey-light p-4 text-white text-xl w-min mt-5 mb-5 shadow ">
				<FontAwesomeIcon icon={faShoppingCart} />
			</div>
		);
	};

	const renderReviews = () => {
		const createReviews = product.reviews.map((review, index) => (
			<Review data={review} key={index} />
		));

		return (
			<div className="flex flex-col">
				<h2 className="text-xl">Reviews ({product.reviews.length})</h2>
				{createReviews}
			</div>
		);
	};

	const renderItemDetails = () => {
		return (
			<div className="text-grey-light overflow-hidden px-10 flex flex-col gap-4 font-bold max-w-md md: mx-auto">
				{renderBackButton()}
				{RenderImageWrapper()}
				{renderProductInfo()}
				{renderPriceAndRating()}
				{renderBuyButton()}
				{renderReviews()}
			</div>
		);
	};

	return <>{renderItemDetails()}</>;
};

export default ItemDetails;
