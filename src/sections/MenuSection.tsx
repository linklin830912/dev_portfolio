import React from "react";
import MenuButton from "../components/buttons/MenuButton";
import LanguageOption from "../components/options/LanguageOption";
import { useTranslation } from "react-i18next";
function MenuSection() {
    const { t } = useTranslation(["menu"]);
    return (
        <div className="flex flex-col md:pt-3 md:flex-row md:items-center justify-between h-[100%]">
            <div className="flex flex-col md:flex-row">
                <MenuButton to="/dev_portfolio" content={t('menu:about')} />
                <MenuButton to="/dev_portfolio/portfolio"  content={t('menu:portfolio')} />
                <MenuButton to="/dev_portfolio/resume" content={t('menu:resume')} />
                <MenuButton to="/dev_portfolio/contact" content={t('menu:contact')} />
            </div>
            <div className="text-right p-1 pb-32 text-h3 text-menu-font">{"▹"}</div>
            <div className="p-5">
                <LanguageOption/>
            </div>
            
        </div>
    );
 }
export default MenuSection;