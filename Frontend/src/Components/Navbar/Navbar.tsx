import {
	faBars,
	faSearch,
	faShoppingCart,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { setIsMenu } from "./MenuSlice";

export interface NavBarProps {}

const NavBar = () => {
	const { isMenu } = useSelector((state: RootState) => state.menuSlice);

	const dispatch = useDispatch();

	const handleOpenMenu = () => {
		dispatch(setIsMenu(true));
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
			<Menu isOpened={isMenu} />
		</>
	);
};

export default NavBar;
