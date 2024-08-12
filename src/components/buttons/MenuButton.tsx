import React from "react";
import { Link } from "react-router-dom";
function MenuButton(props: MenuButtonProps) {
    return (
        
        <Link className="p-5 text-menu-font hover:text-menu-font-hover hover:underline hover:italic font-sans"
            to={props.to}>{props.content}</Link>       
        
    );
}
type MenuButtonProps = {
    to: string;
    content: string;
 }
export default MenuButton;