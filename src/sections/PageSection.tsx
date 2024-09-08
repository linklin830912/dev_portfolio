import React from "react";
import AboutPage from "../pages/AboutPage";
import ResumePage from "../pages/ResumePage";
import ProjectPage from "../pages/ProjectPage";
import ContactsPage from "../pages/ContactsPage";
import TitleCanvas from "../components/canvas/TitleCanvas";
import style from "./styles/UnderlineMarkup.module.css"

function PageSection() {
    return (
        <div className="w-[100%] px-2 lg:px-0"> 
          <div>
             <TitleCanvas title="About"/>
               <AboutPage /> 
            </div>
          <div>
             <TitleCanvas title={"Projects"} />
               <ProjectPage />
            </div>
          <div>
             <TitleCanvas title={"Resume"} offsetY={100} />
               <ResumePage/>
            </div>
          <div>
             <TitleCanvas title="Contact" offsetY={-100} />
               <ContactsPage/>
            </div>
          
            
        </div>
        
    );
 }
export default PageSection;
