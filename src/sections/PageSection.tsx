import React from "react";
import { Routes, Route } from "react-router-dom"
import AboutPage from "../pages/AboutPage";
import ResumePage from "../pages/ResumePage";
import ContactPage from "../pages/ContactPage";
import PortfolioPage from "../pages/PortfolioPage";
function PageSection() {
    return (
        <div className="w-[100%] px-2 lg:px-0 overflow-hidden">            
            <Routes>
                <Route path="/dev_portfolio/about" element={<AboutPage />} />
                <Route path="/dev_portfolio/portfolio" element={ <PortfolioPage/> } />
                <Route path="/dev_portfolio/resume" element={ <ResumePage/> } />
                <Route path="/dev_portfolio/contact" element={ <ContactPage/> } />
            </Routes>
        </div>
    );
 }
export default PageSection;
