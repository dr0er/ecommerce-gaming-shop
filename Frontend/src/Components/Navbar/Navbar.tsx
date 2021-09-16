import {
	faBars,
	faSearch,
	faShoppingCart,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "./Menu";
import { useState } from "react";

export interface NavBarProps {}

const NavBar = () => {
	const [isMenu, setIsMenu] = useState(false);

	const handleOpenMenu = () => {
		setIsMenu(true);
	};
	const handleCloseMenu = () => {
		setIsMenu(false);
	};

	return (
		<>
			<div
				className="w-auto h-20
  text-black flex justify-around font text-2xl items-center"
			>
				<div>
					<FontAwesomeIcon icon={faBars} onClick={handleOpenMenu} />
				</div>
				<div>
					<FontAwesomeIcon icon={faShoppingCart} />
				</div>
				<div>
					<FontAwesomeIcon icon={faUser} />
				</div>
				<div>
					<FontAwesomeIcon icon={faSearch} />
				</div>
			</div>
			<Menu isOpened={isMenu} onClose={handleCloseMenu} />
		</>
	);
};

export default NavBar;
