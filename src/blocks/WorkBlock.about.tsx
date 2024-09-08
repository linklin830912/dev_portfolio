import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { backgroundBlueColor, contentFontColor } from "..";
import style from "../GlobalStyle.module.css"

const LINE_WIDTH = 16;
function WorkBlock() {
    
    const [isDetailHiddenIndex, setIsDetailHiddenIndex] = useState<number>(-1);
    const { t } = useTranslation(["about"]);
    return (
        <div className={`grid grid-cols-[${LINE_WIDTH}px_auto] grid-rows-[auto_auto_auto] relative`}>
            <div className={`col-start-1 row-start-1 row-span-2 w-[${LINE_WIDTH}px] flex justify-center relative`}>
                <div className="bg-content-font w-[2px] h-[100%] absolute top-5"></div>
            </div>
            <WorkTimeCard
                rowNumber={1}
                title={t("work_experience.ibuypower.title")}
                companyName={t("work_experience.ibuypower.companyName")}
                date={t("work_experience.ibuypower.date")}
                accomplishments={t("work_experience.ibuypower.accomplishments", { returnObjects: true })}
                roleDescription={t("work_experience.ibuypower.role_description")}
                companyIntroduction={t("work_experience.ibuypower.company_introduction")}
                companyLink={t("work_experience.ibuypower.company_link")}
                otherLinks={t("work_experience.ibuypower.other_links", {returnObjects: true})}
                handleClick={ 
                    ()=>setIsDetailHiddenIndex(isDetailHiddenIndex===1?-1:1)
                }
                isDetailHidden={isDetailHiddenIndex === 1}
            />
            <WorkTimeCard
                rowNumber= {2}
                title={t("work_experience.fnz.title")}
                companyName={t("work_experience.fnz.companyName")}
                date={t("work_experience.fnz.date")}
                accomplishments={t("work_experience.fnz.accomplishments", { returnObjects: true })}
                roleDescription={t("work_experience.fnz.role_description")}
                companyIntroduction={t("work_experience.fnz.company_introduction")}
                companyLink={t("work_experience.fnz.company_link")}
                otherLinks={t("work_experience.fnz.other_links", {returnObjects: true})}
                handleClick={ 
                    ()=>setIsDetailHiddenIndex(isDetailHiddenIndex===2?-1:2)
                }
                isDetailHidden={ isDetailHiddenIndex===2}
            />
            <WorkTimeCard
                rowNumber= {3}
                title={t("work_experience.robotic_plus.title")}
                companyName={t("work_experience.robotic_plus.companyName")}
                date={t("work_experience.robotic_plus.date")}
                accomplishments={t("work_experience.robotic_plus.accomplishments", { returnObjects: true })}
                roleDescription={t("work_experience.robotic_plus.role_description")}
                companyIntroduction={t("work_experience.robotic_plus.company_introdution")}
                companyLink={t("work_experience.robotic_plus.company_link")}
                otherLinks={t("work_experience.robotic_plus.other_links", {returnObjects: true})}
                handleClick={ 
                    ()=>setIsDetailHiddenIndex(isDetailHiddenIndex===3?-1:3)
                }
                isDetailHidden={ isDetailHiddenIndex===3}
            />
        </div>
    );
}

type WorkTimeCardProps = {
    rowNumber:number;
    title: string;
    companyName: string;
    date: string;
    handleClick: () => void;
    isDetailHidden: boolean;
    accomplishments: string[];
    roleDescription: string;
    companyIntroduction: string;
    companyLink: string;
    otherLinks: {name:string, link:string}[];
}
function WorkTimeCard(props: WorkTimeCardProps) { 
    const { t } = useTranslation(["about"]);
    return <>
        <div className={`col-start-2 row-start-${props.rowNumber} ml-5 text-content-font  relative bottom-3 cursor-pointer mb-10`}
            onClick={props.handleClick}>
            <div className="relative left-[-27.5px] top-[25px]"><WorkBulletPoint isSelected={!props.isDetailHidden} /></div>
            <div className="hover:text-advanced">
                <h3 className="text-h3 font-bold">{props.title}</h3>
                <h4 className="text-h4">{props.companyName}</h4>
                <h5 className="text-h6 font-light">{props.date}</h5>
            </div>
            
            {props.isDetailHidden && <div>
                <h5 className="text-h6 mt-3 font-light text-basic">{ t("work_experience.accomplishments")}</h5>
                {props.accomplishments.map((accomplishment, index) =>
                    <h6 className={`${style.bulletPoint} font-light text-h6 mb-3`} key={index} dangerouslySetInnerHTML={{ __html: accomplishment }}></h6>)}
                <h5 className="text-h6 mt-3 font-light text-basic">{ t("work_experience.role_description")}</h5>
                <h6 className={`${style.h2Container} text-h6 font-light`} dangerouslySetInnerHTML={{__html:props.roleDescription}}></h6>
                <h5 className="text-h6 mt-3 font-light text-basic">{t("work_experience.company_introcdution")}</h5>
                
                <h6 className="text-h6 font-light">{props.companyIntroduction}</h6>
                
                <a className={`${style.urlA} text-h6 mt-3 text-advanced font-bold`} target="_blank" href={props.companyLink} rel="noreferrer">{t("work_experience.company_website")}</a>
                <div>
                    {props.otherLinks.map((otherLink, index) => <a key={index} target="_blank"
                        className={`${style.urlA} text-h6 mt-3 text-advanced font-bold`} href={otherLink.link} rel="noreferrer">{otherLink.name}</a>
                    )}
                </div>
                
            </div>}
        </div>
    </>;
}
type WorkBulletPointProps = {
    isSelected:boolean
}
function WorkBulletPoint(props:WorkBulletPointProps) { 
    return (
        <svg width="16" height="16">
            <circle cx="8" cy="8" r="4" stroke={contentFontColor} strokeWidth="2" fill={props.isSelected?backgroundBlueColor:contentFontColor} />
        </svg>
    );
}

export default WorkBlock;