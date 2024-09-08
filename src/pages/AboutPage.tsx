import React from "react";
import IntroBlock from "../blocks/IntroBlock.about";
import SkillBlock from "../blocks/SkillBlock.about";
import WorkBlock from "../blocks/WorkBlock.about";
import EducationBlock from "../blocks/EducationBlock.about";
import TitleCanvas from "../components/canvas/TitleCanvas";

function AboutPage() {   
    return (
        <div className="block">
            <div id="about"></div>            
            <div className="h-[100vh] flex justify-center z-10 relative">
               <IntroBlock /> 
            </div>
            <div id="skills"></div>
            <div className="h-auto min-h-[100vh] flex justify-center items-center z-10 relative">
                <SkillBlock/>
            </div>
            <div id="work-experience"></div>
            <div className="h-auto min-h-[100vh] flex justify-center items-center z-10  relative">
                <WorkBlock/>
            </div>
            <div id="education"></div>
            <div className="h-auto min-h-[100vh] flex justify-center items-center z-10  relative">
                <EducationBlock/>
            </div> 
        </div>
    );
 }
export default AboutPage;
