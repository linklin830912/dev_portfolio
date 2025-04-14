import React from "react";
import { IKImage } from 'imagekitio-react';
import SkillTag, { SkillTagProps } from "../components/tags/SkillTag";
import style from "../GlobalStyle.module.css"
import { useTranslation } from "react-i18next";


function ProjectPage() {
    const { t } = useTranslation(["project"]);
    return <div className="flex flex-col md:flex-row items-center md:justify-evenly md:items-end">
        <div>
            <h6 className={`${style.academic} text-h6 text-basic`}>{t("academic")}</h6>
            <ProjectCard date="Oct-2024" from={t("individual")} title="The Ballet of Mirrors"
                src="screamjam.png" href="https://linklin19940912.itch.io/the-ballet-of-mirrors"
                skills={[{ text: "Unity", level: 3 }, { text: "C#", level: 3 }, { text: "HLSL", level: 1 }, { text: "Shader", level: 2 }]}
                specialDescription="Ready for Voting: Oct 22 ScreamJam"
            />
            <ProjectCard date="Oct-2024" from={t("individual")} title="White Maze Rescue"
                src="1-bit.png" href="https://linklin19940912.itch.io/white-maze-rescue"
                skills={[{ text: "Unity", level: 3 }, { text: "C#", level: 3 }, { text: "HLSL", level: 1 }, { text: "Shader", level: 2 }]}
                specialDescription="Voting ends in: Oct 31 1-bit GameJamVoting"
            />
            <ProjectCard date="Sep-2024" from={t("individual")} title="Before Timeout"
                src="beforeTimeout.png" href="https://linklin19940912.itch.io/before-timeout"
                skills={[{ text: "Unity", level: 3 }, { text: "C#", level: 3 }]}
                specialDescription="Rank 2nd🥈 at 12-days-of-sketchoween"
            />
            <ProjectCard date="Sep-2024" from={t("individual")} title="Bridge Game"
                src="bridgeGame.png" href="https://play.unity.com/en/games/95dddd94-3271-4e15-8f00-53e9385e812d/anu2024-u7819042"
                skills={[{ text: "Unity", level: 3 }, { text: "C#", level: 3 }]}
            />
            <ProjectCard date="Aug-2024" from={t("individual")} title="GMTK GameJam 2024"
                src="gamejam.png" href="https://linklin19940912.itch.io/ssscale"
                skills={[{ text: "Unity", level: 3 }, { text: "C#", level: 3 }]}
            />
            <ProjectCard date="Apr-2024" from={t("groupwork")} title="Grass Rendering"
                src="cg.png" href=""
                skills={[{ text: "C++", level: 2 }, { text: "OpenGL", level: 1 }]}
            />
            <ProjectCard date="June-2020" from={t("individual")} title="Point cloud Research Project"
                src="CITA.png" href="https://issuu.com/link0912/docs/ke_lin_portfolio_2020"
                skills={[{ text: "Python", level: 3 }, { text: "NumPy", level: 2 }]}
            />
        </div>
        <div>
            <h6 className={`${style.professional} text-h6 text-basic`}>{t("professional")}</h6>
            <ProjectCard date="Feb-2025" from="Eolas Solutions" title="Fios"
                src="fios.png" href="https://fios.eolassolutions.com.au/"
                skills={[{ text: "NextJS", level: 3 }, { text: "Open AI", level: 2 }]}
            />
            <ProjectCard date="Oct-2023" from="iBuypower" title="3d showroom"
                src="3d_showroom.png" href="https://www.ibuypower.com/3d-showroom/y70"
                skills={[{ text: "NextJS", level: 3 }, { text: "ThreeJS", level: 3 }, { text: "React Three Fiber", level: 3 }, { text: "WebGL", level: 2 }]}
            />
            <ProjectCard date="Aug-2023" from="iBuypower" title="iBuypower website"
                src="ibuypower.png" href="https://www.ibuypower.com"
                skills={[{ text: "NextJS", level: 3 }]}
            />
            <ProjectCard date="May-2022" from="FNZ" title="James Hay website"
                src="jhp.png" href="https://www.jameshay.co.uk/home/"
                skills={[{ text: "React", level: 3 }, { text: "C#", level: 3 }, { text: "MicrosoftSQL", level: 2 }]}
            />
            <ProjectCard date="Sep-2020" from="RoboticPlus.AI" title="Robotic Welding Project"
                src="roboticplusAi.png" href=""
                skills={[{ text: "Python", level: 3 }, { text: "C#", level: 3 }, { text: "Rhino3D", level: 2 }]}
            />
        </div>        
    </div>;
}
 
type ProjectCardProps = {
    date: string,
    from: string,
    title: string,
    src: string,
    href: string,
    skills: SkillTagProps[],
    specialDescription?: string 
}
function ProjectCard(props: ProjectCardProps) { 
    const handleMouseOver = () => {
        
    }
    return (
        <a onMouseOver={handleMouseOver} href={props.href} target="_blank"
            className={`${style.pinPoint} relative w-[250px] sm:w-[350px] flex flex-col items-end mb-3 text-menu-font text-h6 bg-background-blue hover:bg-menu-hover-blue px-3 py-2 rounded-[5px]`} rel="noreferrer">
            <h5 className={`text-h6 font-bold leading-tight text-basic mb-1`}>{ props.specialDescription}</h5>
            <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-background-blue opacity-70 hover:opacity-0 z-0"></div>
            <div className={`flex flex-col sm:flex-row`}>
                <div className="sm:mr-3 flex flex-col sm:justify-end sm:items-end z-10 text-right">
                   
                    <h5 className={`text-h5 leading-tight font-bold mb-1`}>{props.title}</h5>
                    <div className="flex flex-row sm:flex-col items-end justify-end font-light text-h6">
                        <h6 className="mr-2 sm:mr-0">{props.from}</h6>
                        <h6 >{props.date}</h6>
                        
                    </div>
                    
                </div>
                
                <IKImage width={"220px"}
                    urlEndpoint={process.env.REACT_APP_IK_URL_ENDPOINT} 
                    path={props.src}
                />
                
            </div>
            <div className="flex flex-row mt-2 flex-wrap z-10">
                {props.skills.map((skill, index) => <SkillTag isMini key={index} text={skill.text} level={skill.level} />)}
            </div>
        </a>
    );
}
export default ProjectPage;