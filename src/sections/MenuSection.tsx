import React from "react";
import MenuButton from "../components/buttons/MenuButton";
function MenuSection() {
    return (
        <div className="flex items-center bg-menu-blue h-[100%] pt-3">
            <MenuButton to="/about" content="about" />
            <MenuButton to="/portfolio"  content="portfolio"/>
            <MenuButton to="/resume" content="resume" />
            <MenuButton to="/contact"  content="contact"/>
        </div>
    );
 }
export default MenuSection;