import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CheckboxProps {
	setCheckbox: React.Dispatch<React.SetStateAction<boolean>>;
	isCheckbox: Boolean;
	text: string;
}

const Checkbox = ({ setCheckbox, isCheckbox, text }: CheckboxProps) => {
	return (
		<div
			className="flex gap-3 align-middle"
			onClick={() => setCheckbox((prev: any) => !prev)}
		>
			<div className="border-2 w-5 h-5 rounded-md my-auto flex border-gray-400">
				{isCheckbox && <FontAwesomeIcon icon={faCheck} />}
			</div>
			<p
				className={`opacity-30 duration-300 font-bold text-sm my-auto ${
					isCheckbox && "opacity-100"
				}`}
			>
				{text}
			</p>
		</div>
	);
};

export default Checkbox;
