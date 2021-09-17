import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as React from "react";

interface ItemMenuProps {
    children: React.ReactNode;
}

const ItemMenu = ({children}:ItemMenuProps) => {
    return (
        <li className={"flex justify-between items-center w-full py-2 font-semibold hover:text-blue-400"}>
            {children}
            <FontAwesomeIcon icon={faChevronRight} />
        </li>
    );
}

export default ItemMenu;