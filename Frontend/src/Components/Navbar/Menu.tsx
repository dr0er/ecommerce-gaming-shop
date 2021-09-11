import clsx from "clsx";
export interface MenuProps {}

const Menu: React.SFC<MenuProps> = () => {
    const menuStyle = clsx({
        "-translate-x-full": true,
    });
    return (
        <div
            className={
                `h-full w-min flex 
    bg-grey-light absolute top-0 left-0 
    transform  border-8 
    border-red-500` + menuStyle
            }
        >
            1234567890
        </div>
    );
};

export default Menu;
