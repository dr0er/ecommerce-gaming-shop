import clsx from "clsx";

export interface ImageProps {
	src: string;
	current?: boolean;
}

const Image = ({ src, current }: ImageProps) => {
	const styles = clsx({
		"opacity-0": !current,
	});

	return (
		<img
			className={`object-cover w-screen transition duration-300 ${styles}`}
			src={src}
			alt=""
		/>
	);
};

export default Image;
