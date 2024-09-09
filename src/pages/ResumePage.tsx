
import { useEffect, useRef, useState } from "react";
import styles from "../components/buttons/styles/FloatButton.module.css";
import DownloadIcon from "../components/icons/DownloadIcon";
import style from "../GlobalStyle.module.css"
import { useTranslation } from "react-i18next";

function ResumePage() {    
    const containerRef = useRef<HTMLDivElement>(null);
    const [degree, setDegree] = useState<number>(-10);
    const { t } = useTranslation(["contact"]);
    useEffect(() => {        
        let position = containerRef.current?.getBoundingClientRect().y ?? 0;
        let degree = 0;
        let currentScrollY = window.scrollY;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition - position > 0) { 
                if (scrollPosition > currentScrollY) {
                    degree -= 1;
                    degree = Math.max(degree, -90);
                } else {
                    degree += 1;
                    degree = Math.min(degree, 90);
                 }
                setDegree(degree);
                currentScrollY = scrollPosition;

            }
        };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    }, []);
    return (
        <div ref={ containerRef} className="h-[100vh] flex-row flex justify-center items-center relative">
            <div className="absolute w-[100vw] h-[100vh] overflow-hidden">
                <div className={style.spotlightLeft} style={{ transform: `rotate(${degree}deg)` }}></div>
                <div className={style.spotlightRight}  style={{transform: `rotate(${-degree}deg)`}}></div>
            </div>            
            <a className={`w-[100%] max-w-[350px] ${styles.floatA} px-10 py-3 bg-content-font hover:bg-advanced text-menu-blue font-bold rounded-[100px] text-h3 whitespace-nowrap relative`}
                href="https://drive.google.com/uc?export=download&id=1w4ekJ5cT9X578-BtMKZgd9ZBMoNKXqo7">                
                <div className="flex flex-row justify-center items-center"><h2 className="mr-3">{t("resume")}</h2> <DownloadIcon /></div> 
            </a> 
        </div>
    );
 }
export default ResumePage;