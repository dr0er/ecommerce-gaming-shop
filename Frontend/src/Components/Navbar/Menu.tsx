import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItem from "./MenuItem";

export interface MenuProps {
	isOpened: boolean;
	onClose: () => void;
}

const Menu = ({ isOpened, onClose }: MenuProps) => {
	const baseClasses = `h-full w-8/12 flex flex-col 
    bg-background-grey absolute top-0 left-0 transform
    px-8 text-grey-light text-xl transition-transform duration-250 pt-6 ${
			!isOpened && "-translate-x-full"
		}`;

	const handleCloseMenu = () => {
		onClose();
	};

	return (
		<div className={baseClasses}>
			<div className={"flex gap-6 items-center font-semibold"}>
				<FontAwesomeIcon icon={faTimes} onClick={handleCloseMenu} />
				Menu
			</div>
			<div className={"opacity-30 py-2"}>Categories</div>
			<ul className={"flex flex-col w-full font-semibold"}>
				<MenuItem>Mouse</MenuItem>
				<MenuItem>Keyboard</MenuItem>
				<MenuItem>Chair</MenuItem>
				<MenuItem>Mousepad</MenuItem>
				<MenuItem>Special offer</MenuItem>
			</ul>
			<ul className={"py-6 "}>
				<MenuItem>Helpdesk</MenuItem>
				<MenuItem>About us</MenuItem>
			</ul>
			<div className={"text-grey-light text-xl font-bold"}>Logout</div>
		</div>
	);
};

export default Menu;
