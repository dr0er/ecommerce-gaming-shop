import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as React from "react";
import MenuItem from "./MenuItem";
import {useState} from "react";

export interface MenuProps {
    isOpened: boolean;
}

const Menu = ({isOpened}: MenuProps) => {

    const baseClasses = `h-full w-8/12 flex flex-col 
    bg-background-grey absolute top-0 left-0 transform border-8 
    border-red-500 px-8 text-grey-light text-xl transition-transform duration-250`

    const classNames = isOpened ? baseClasses : baseClasses + " -translate-x-full"

    return (
        <div
            className={classNames}
        >
            <div className={"flex gap-6 items-center"}>
                <FontAwesomeIcon icon={faTimes} />
                Menu
            </div>
            <div className={"opacity-30 py-2"}>
                Categories
            </div>
            <ul className={"flex flex-col w-full"}>
                <MenuItem>
                    Mouse
                </MenuItem>
                <MenuItem>
                    Keyboard
                </MenuItem>
                <MenuItem>
                    Chair
                </MenuItem>
                <MenuItem>
                    Mousepad
                </MenuItem>
                <MenuItem>
                    Special offer
                </MenuItem>
            </ul>
            <ul className={"py-6 "}>
                <MenuItem>
                    Helpdesk
                </MenuItem>
                <MenuItem>
                    About us
                </MenuItem>
            </ul>
            <div className={"text-grey-light text-xl font-semibold"}>
                Logout
            </div>

        </div>
    );
};


export default Menu;
