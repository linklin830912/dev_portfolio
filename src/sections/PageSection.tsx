import React from "react";
import { Routes, Route } from "react-router-dom"
import AboutPage from "../pages/AboutPage";
import ResumePage from "../pages/ResumePage";
import ContactPage from "../pages/ContactPage";
import PortfolioPage from "../pages/PortfolioPage";
function PageSection() {
    return (
        <div className="w-[100%] bg-slate-300 overflow-scroll">            
            <Routes>
                <Route path="/about" element={<AboutPage />} >link</Route>
                <Route path="/portfolio" element={ <PortfolioPage/> } />
                <Route path="/resume" element={ <ResumePage/> } />
                <Route path="/contact" element={ <ContactPage/> } />
            </Routes>
        </div>
    );
 }
export default PageSection;
