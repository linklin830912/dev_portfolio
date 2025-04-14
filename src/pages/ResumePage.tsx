
import { useEffect, useRef, useState } from "react";
import styles from "../components/buttons/styles/FloatButton.module.css";
import DownloadIcon from "../components/icons/DownloadIcon";
import style from "../GlobalStyle.module.css"
import { useTranslation } from "react-i18next";
import { Download } from 'lucide-react';

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
                    degree += 1;
                    degree = Math.max(degree, -90);
                } else {
                    degree -= 1;
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
        <div ref={ containerRef} className="h-[100vh] flex-row flex gap-x-5 justify-center items-center relative">
            <a className={`${styles.floatA} px-10 py-3 opacity-75 hover:opacity-100 bg-content-font hover:bg-advanced text-menu-blue font-bold rounded-md text-h3 relative`}
                href="https://drive.google.com/uc?export=download&id=1WOFrtM01e6x6lYMjFxPKNMXzXrtVZlZY">                
                <div className="flex flex-col justify-center items-center">
                    <h2 className="mr-3">Comp</h2>
                    <h2 className="mr-3">{t("resume")}</h2>
                    <Download className="w-6 stroke-background-blue" />
                </div> 
            </a>
            <a className={`${styles.floatA} px-10 py-3 opacity-75 hover:opacity-100 bg-content-font hover:bg-advanced text-menu-blue font-bold rounded-md text-h3 relative`}
                href="https://drive.google.com/uc?export=download&id=1Sey89eRnrr8hJiZjfVfolUXelmRIj5W3">                
                <div className="flex flex-col justify-center items-center">
                    <h2 className="mr-3">Arch</h2>
                    <h2 className="mr-3">{t("resume")}</h2>
                    <Download className="w-6 stroke-background-blue" />
                </div> 
            </a>            
        </div>
    );
 }
export default ResumePage;