import React from "react";
import { Routes, Route } from "react-router-dom"
import AboutPage from "../pages/AboutPage";
import ResumePage from "../pages/ResumePage";
import ContactPage from "../pages/ContactPage";
import PortfolioPage from "../pages/PortfolioPage";
function PageSection() {
    return (
        <div className="w-[100%] px-2 lg:px-0 overflow-x-hidden overflow-y-hidden">            
            <Routes>
                <Route path="/" element={<AboutPage />} >link</Route>
                <Route path="/portfolio" element={ <PortfolioPage/> } />
                <Route path="/resume" element={ <ResumePage/> } />
                <Route path="/contact" element={ <ContactPage/> } />
            </Routes>
        </div>
    );
 }
export default PageSection;
