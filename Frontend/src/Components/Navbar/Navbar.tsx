import {
    faBars,
    faSearch,
    faShoppingCart,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "./Menu";
import * as React from "react";
import { useState } from "react";

export interface NavBarProps {}

const NavBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleMenu = () => {
        setIsExpanded((prev) => !prev);
    };
    return (
        <>
            <div
                className="w-auto h-20
  text-black flex justify-around font text-2xl items-center"
            >
                <div onClick={handleToggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
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
            <Menu isOpened={isExpanded}/>
        </>
    );
};

export default NavBar;
