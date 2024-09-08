import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { backgroundBlueColor, contentFontColor } from "..";
import style from "../GlobalStyle.module.css"

const LINE_WIDTH = 16;
function EducationBlock() {

    const [isDetailHiddenIndex, setIsDetailHiddenIndex] = useState<number>(-1);
    const { t } = useTranslation(["about"]);
    return <div className={`grid grid-cols-[${LINE_WIDTH}px_auto] grid-rows-[auto_auto_auto] relative`}>
            <div className={`col-start-1 row-start-1 row-span-2 w-[${LINE_WIDTH}px] flex justify-center relative`}>
                <div className="bg-content-font w-[2px] h-[100%] absolute top-5"></div>
            </div> 
            <EducationTimeCard
                rowNumber={1}
                title={t("education.anu.title")}
                subtitle={t("education.anu.sub_title")}
                instituteName={t("education.anu.institute_name")}
                date={t("education.anu.date")}
                accomplishments={t("education.anu.accomplishments", { returnObjects: true })}
                instituteIntroduction={t("education.anu.institute_introduction")}
                instituteLink={t("education.anu.institute_link")}
                otherLinks={t("education.anu.other_links", {returnObjects: true})}
                handleClick={ 
                    ()=>setIsDetailHiddenIndex(isDetailHiddenIndex===1?-1:1)
                }
                isDetailHidden={isDetailHiddenIndex === 1}
            />
            <EducationTimeCard
                rowNumber= {2}
                title={t("education.cita.title")}
                subtitle={t("education.cita.sub_title")}
                instituteName={t("education.cita.institute_name")}
                date={t("education.cita.date")}
                accomplishments={t("education.cita.accomplishments", { returnObjects: true })}
                instituteIntroduction={t("education.cita.institute_introduction")}
                instituteLink={t("education.cita.institute_link")}
                otherLinks={t("education.cita.other_links", {returnObjects: true})}
                handleClick={ 
                    ()=>setIsDetailHiddenIndex(isDetailHiddenIndex===2?-1:2)
                }
                isDetailHidden={ isDetailHiddenIndex===2}
            />
            <EducationTimeCard
                rowNumber= {3}
                title={t("education.ncku.title")}
                subtitle={t("education.ncku.sub_title")}
                instituteName={t("education.ncku.institute_name")}
                date={t("education.ncku.date")}
                accomplishments={t("education.ncku.accomplishments", { returnObjects: true })}
                instituteIntroduction={t("education.ncku.institute_introduction")}
                instituteLink={t("education.ncku.institute_link")}
                otherLinks={t("education.ncku.other_links", {returnObjects: true})}
                handleClick={ 
                    ()=>setIsDetailHiddenIndex(isDetailHiddenIndex===3?-1:3)
                }
                isDetailHidden={ isDetailHiddenIndex===3}
            />
        </div>;
}
type EducationTimeCardProps = {
    rowNumber:number;
    title: string;
    subtitle: string;
    date: string;
    handleClick: () => void;
    isDetailHidden: boolean;
    accomplishments: string[];
    instituteName: string;
    instituteIntroduction: string;
    instituteLink: string;
    otherLinks: {name:string, link:string}[];
}
function EducationTimeCard(props: EducationTimeCardProps) { 
    const { t } = useTranslation(["about"]);
    return <>
        <div className={`col-start-2 row-start-${props.rowNumber} ml-5 text-content-font relative bottom-3 cursor-pointer mb-10`}
            onClick={props.handleClick}>
            <div className="relative left-[-27.5px] top-[25px]"><EducationBulletPoint isSelected={ !props.isDetailHidden} /></div>
            <div className="hover:text-advanced">
                <h3 className="text-h3 font-bold">{props.title}</h3>
                <h4 className="text-h4 font-bold">{props.subtitle}</h4>
                <h4 className="text-h5">{props.instituteName}</h4>
                <h5 className="text-h6 font-light">{props.date}</h5>   
            </div>
            
            {props.isDetailHidden && <div>
                <h5 className="text-h6 mt-3 font-light text-basic">{ t("education.development")}</h5>
                {props.accomplishments.map((accomplishment, index) =>
                    <h6 className={`${style.bulletPoint} font-light text-h6 mb-3`} key={index} dangerouslySetInnerHTML={{ __html: accomplishment }}></h6>)}
                <h5 className="text-h6 mt-3 font-light text-basic">{ t("education.institute_introduction")}</h5>
                <h6 className="text-h6 font-light">{props.instituteIntroduction}</h6>
                <a className={`${style.urlA} text-h6 mt-3 text-advanced font-bold`} target="_blank" href={props.instituteLink} rel="noreferrer">
                    {t("education.institute_website")}</a>
                <div>
                    {props.otherLinks.map((otherLink, index) => <a key={index} target="_blank"
                        className={`${style.urlA} text-h6 mt-3 text-advanced font-bold`} href={otherLink.link} rel="noreferrer">{otherLink.name}</a>
                    )}
                </div>
                
            </div>}
        </div>
    </>;
}
type EducationBulletPointProps = {
    isSelected:boolean
}
function EducationBulletPoint(props: EducationBulletPointProps) { 
    
    
    return (
        <svg width="16" height="16">
            <circle cx="8" cy="8" r="4" stroke={contentFontColor} strokeWidth="2" fill={props.isSelected?backgroundBlueColor:contentFontColor} />
        </svg>
    );
}

export default EducationBlock;