import { useTranslation } from "react-i18next";
function IntroBlock() {
    const { t } = useTranslation(["about"]);
    return (
        <div className="pt-[30%] lg:pt-0 w-[100%] flex flex-col lg:flex-row lg:items-center">
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
    );
}
 
export default IntroBlock;