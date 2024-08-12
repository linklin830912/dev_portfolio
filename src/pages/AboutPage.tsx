import React from "react";
import { useTranslation } from "react-i18next";
function AboutPage() {
    const { t } = useTranslation(["about"]);
    return (
        <div className="w-[100%]">
            <div className="w-[100%] flex flex-col lg:flex-row lg:items-center">
                <div className="lg:min-w-[40%] pb-5 lg:pb-0 text-content-font">
                    <h2 className="text-h2 md:text-h1">{t('hello')}</h2>
                    <h2 className="text-h3 md:text-h2">{t('myName')}</h2>
                    <h2 className="text-h3 md:text-h2">{t('nickName')} Link</h2>
                </div>
                <div className="text-content-font">
                    <h2 className="text-h5 md:text-h4 pb-3">{t('intro')}</h2> 
                    <h2 className="text-h5 md:text-h4 pb-3">{t('background')}</h2>
                    <h2 className="text-h5 md:text-h4">{t('current')}</h2>
                </div>
            </div>
            
        </div>
    );
 }
export default AboutPage;