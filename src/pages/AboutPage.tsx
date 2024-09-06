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
            <TitleCanvas title="About"/>
            <div className="h-[100vh] flex justify-center z-10 relative">
               <IntroBlock /> 
            </div>
            <TitleCanvas title="Skills"/>
            <div className="h-auto min-h-[100vh] flex justify-center items-center z-10 relative">
                <SkillBlock/>
            </div>
            <TitleCanvas title="Work Experience"/>
            <div className="h-auto min-h-[100vh] flex justify-center items-center z-10  relative">
                <WorkBlock/>
            </div>
            <TitleCanvas title="Education"/>
            <div className="h-auto min-h-[100vh] flex justify-center items-center z-10  relative">
                <EducationBlock/>
            </div> 
        </div>
    );
 }
export default AboutPage;
