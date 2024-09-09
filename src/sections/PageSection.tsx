import React, { useEffect } from "react";
import ResumePage from "../pages/ResumePage";
import ProjectPage from "../pages/ProjectPage";
import ContactsPage from "../pages/ContactsPage";
import TitleCanvas from "../components/canvas/TitleCanvas";
import AboutPage from "../pages/AboutPage";
import SkillPage from "../pages/SkillPage";
import WorkPage from "../pages/WorkPage";
import EducationPage from "../pages/EducationPage";

function PageSection() {
   
    return (
        <div className="w-[100%] px-2 lg:px-0">           
            <div id="about" className="h-[100vh] flex justify-center z-10 relative">
               <TitleCanvas title="About"/>
               <AboutPage /> 
            </div>
            <div id="skills" className="h-auto min-h-[100vh] flex justify-center items-center z-10 relative">
               <TitleCanvas title="Skills"/>
               <SkillPage/>
            </div>
            <div id="work-experience" className="h-auto min-h-[100vh] flex justify-center items-center z-10  relative">
               <TitleCanvas title="Professional"/>
               <WorkPage/>
            </div>
            <div id="education" className="h-auto min-h-[100vh] flex justify-center items-center z-10  relative">
               <TitleCanvas title="Education"/>   
               <EducationPage />
            </div> 
          
            <div id="projects" >
               <TitleCanvas title={"Projects"} />
               <ProjectPage />
            </div>
            <div id="resume" >
               <TitleCanvas title={"Resume"}  />
               <ResumePage/>
            </div>
            <div id="contacts">
               <TitleCanvas title={"Contact"}/>
               <ContactsPage/>
            </div>      
        </div>
        
    );
 }
export default PageSection;
