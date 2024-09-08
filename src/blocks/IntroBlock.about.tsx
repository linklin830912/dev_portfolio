import { useTranslation } from "react-i18next";
import style from "../GlobalStyle.module.css"
function IntroBlock() {
    const { t } = useTranslation(["about"]);
    return (
        <div className="pt-[30%] lg:pt-0 w-[100%] flex flex-col lg:flex-row lg:items-center">
            <div className="lg:min-w-[40%] pb-5 lg:pb-0 text-content-font">
                <h2 className={`${style.h2Container} text-h2 md:text-h2`} dangerouslySetInnerHTML={{ __html: t('hello') }}></h2>
                <div className="flex flex-row items-baseline">
                    <h2 className={`${style.h2Container} text-h3 md:text-h2 mr-2`} dangerouslySetInnerHTML={{ __html: t('myName') }}></h2>
                    <h2 className={`${style.h2Container} text-h3 md:text-h1`} dangerouslySetInnerHTML={{__html:t('name')}}></h2>
                </div>
                <div className="flex flex-row items-baseline">
                    <h2 className={`${style.h2Container} text-h3 md:text-h2 mr-2`} dangerouslySetInnerHTML={{ __html: t('nickName') }}></h2>
                    <h2 className={`${style.h2Container} text-h3 md:text-h1`} ><u>Link</u></h2>
                </div>                
            </div>
            <div className="text-content-font font-light">
                <h2 className={`${style.h2Container} text-h5 md:text-h4 pb-3`} dangerouslySetInnerHTML={{__html:t('intro')}}></h2> 
                <h2 className={`${style.h2Container} text-h5 md:text-h4 pb-3`} dangerouslySetInnerHTML={{__html:t('background')}}></h2>
                <h2 className={`${style.h2Container} text-h5 md:text-h4`} dangerouslySetInnerHTML={{__html:t('current')}}></h2>
            </div>
        </div>
    );
}
 
export default IntroBlock;