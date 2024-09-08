import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { IKImage } from 'imagekitio-react';
import SkillTag, { SkillTagProps } from "../components/tags/SkillTag";
import style from "../GlobalStyle.module.css"


function ProjectPage() {
    // const { unityProvider } = useUnityContext({
    //     loaderUrl: "WebGL Builds/Build/WebGL Builds.loader.js",
    //     dataUrl: "WebGL Builds/Build/WebGL Builds.data",
    //     frameworkUrl: "WebGL Builds/Build/WebGL Builds.framework.js",
    //     codeUrl: "WebGL Builds/Build/WebGL Builds.wasm",
    // });
    return <div id="projects" className="flex flex-col items-center md:items-end">
        <ProjectCard date="Sep-2024" from="individual" title="Bridge Game"
            src="bridgeGame.png" href="https://play.unity.com/en/games/95dddd94-3271-4e15-8f00-53e9385e812d/anu2024-u7819042"
            skills={[{ text: "Unity", level: 3 }, { text: "C#", level: 3 }]}
        />
        <ProjectCard date="Aug-2024" from="individual" title="GMTK GameJam 2024"
            src="gamejam.png" href="https://linklin19940912.itch.io/ssscale"
            skills={[{ text: "Unity", level: 3 }, { text: "C#", level: 3 }]}
        />
        <ProjectCard date="Apr-2024" from="groupwork" title="Grass Rendering"
            src="cg.png" href=""
            skills={[{ text: "C++", level: 2 }, { text: "OpenGL", level: 1 }]}
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
        <ProjectCard date="June-2020" from="CITA" title="Point cloud Research Project"
            src="CITA.png" href="https://issuu.com/link0912/docs/ke_lin_portfolio_2020"
            skills={[{ text: "Python", level: 3 }, { text: "NumPy", level: 2 }]}
        />
            {/* <Unity unityProvider={unityProvider} style={{width:"800px"}}/> */}
        </div>;
}
 
type ProjectCardProps = {
    date: string,
    from: string,
    title: string,
    src: string,
    href: string,
    skills:SkillTagProps[]
}
function ProjectCard(props: ProjectCardProps) { 
    const handleMouseOver = () => {
        
    }
    return (
        <a onMouseOver={handleMouseOver} href={props.href} target="_blank"
            className="relative w-[250px] md:w-[350px] flex flex-col items-end mb-3 text-menu-font text-h6 bg-background-blue hover:bg-menu-hover-blue px-3 py-2 rounded-[5px]" rel="noreferrer">
            <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-background-blue opacity-70 hover:opacity-0 z-0"></div>
            <div className={`${style.pinPoint} flex flex-col md:flex-row`}>
                <div className="md:mr-3 flex flex-col md:justify-end md:items-end z-10 text-right">
                    <h5 className={` text-h5 leading-tight mb-1`}>{props.title}</h5>
                    <div className="flex flex-row md:flex-col items-end justify-end font-light text-h6">
                        <h6 className="mr-2 md:mr-0">{props.from}</h6>
                        <h6 >{props.date }</h6>
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