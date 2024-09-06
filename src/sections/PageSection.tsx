import React from "react";
import { Routes, Route } from "react-router-dom"
import AboutPage from "../pages/AboutPage";
import ResumePage from "../pages/ResumePage";
import PortfolioPage from "../pages/PortfolioPage";
function PageSection() {
    return (
        <div className="w-[100%] px-2 lg:px-0"> 
            <AboutPage />
            <Routes>
                {/* <Route path="/dev_portfolio" element={<AboutPage />} /> */}
                <Route path="/dev_portfolio/portfolio" element={ <PortfolioPage/> } />
                <Route path="/dev_portfolio/resume" element={ <ResumePage/> } />
            </Routes>
            
        </div>
        
    );
 }
export default PageSection;
