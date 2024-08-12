import React, { useState } from "react";
import i18n from "../../i18n.config";
function LanguageOption() {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('english');
    return (
        <select className="bg-menu-blue text-menu-font w-12" value={selectedLanguage} onChange={handleChange}>
            <option value="en">en</option>
            <option value="zh">zh</option>            
        </select>
    );
    function handleChange(e:any ):void {
        setSelectedLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
    }
}
export default LanguageOption;