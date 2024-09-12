import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import SkillTag from "../components/tags/SkillTag";


function SkillPage() { 
    const { t } = useTranslation(["about"]);
    return (
        <div>
            <div className="text-h6 text-basic font-light">
                <h6>basic</h6>
                <div className="w-[25px] h-2 mb-1 rounded-md bg-basic" ></div>
                <div className="w-[45px] h-2 mb-1 rounded-md bg-middle" ></div>
                <div className="w-[65px] h-2 rounded-md bg-advanced" ></div>
                <h6>advanced</h6>
           </div>
        <div className="flex flex-row flex-wrap">
            
            <SkillCard title={<> { t('skills.programming_professional')} </>}
                children={<>
                    <div className="flex flex-wrap">
                        <SkillTag text="React" level={3} />
                        <SkillTag text="NextJS" level={3} />
                        <SkillTag text="Redux" level={1} />
                        <SkillTag text="Hooks" level={3} />
                    </div>
                    <div className="flex flex-wrap">
                        <SkillTag text="JavaScript" level={3} />
                        <SkillTag text="TypeScript" level={3} />
                        <SkillTag text="ES6+" level={2} />
                    </div>
                    <div className="flex flex-wrap">
                        <SkillTag text="HTML" level={3} />
                        <SkillTag text="CSS" level={3} />
                        <SkillTag text="Tailwind" level={3} />
                        <SkillTag text="SASS" level={2} />
                        <SkillTag text="Emotion" level={1} />
                        <SkillTag text="RWD" level={3} />
                    </div>
                    <div className="flex flex-wrap">
                        <SkillTag text="NodeJS" level={2} />
                        <SkillTag text="NPM" level={2} />
                        <SkillTag text="Webpack" level={1} />
                        <SkillTag text="RESTful API" level={3} />
                    </div>
                    <div className="flex flex-wrap">
                        <SkillTag text="C#" level={3} />
                        <SkillTag text=".Net" level={2} />                        
                        <SkillTag text="WPF" level={2} />
                    </div>
                    <div className="flex flex-wrap">
                        <SkillTag text="MicrosoftSQL" level={2} />
                        <SkillTag text="Redis" level={2} /> 
                        <SkillTag text="GraphQL" level={1} /> 
                    </div>
                    <div className="flex flex-wrap">
                        <SkillTag text="Python" level={3} />
                        <SkillTag text="NumPy" level={2} />   
                        <SkillTag text="Pytorch" level={1} />   
                    </div>
                </>}
            />
            
            <SkillCard title={<> { t('skills.programming_academic')} </>}
                children={<>
                        <SkillTag text="C++" level={2} />
                        <SkillTag text="JAVA" level={3} />   
                        <SkillTag text="Pytorch" level={1} />
                     
                        <SkillTag text="PostgreSQL" level={1} />
                        <SkillTag text="MongoDB" level={1} />  
                        <SkillTag text="Firebase" level={1} />  
                    </>}
            />

            <SkillCard title={<> { t('skills.developer_tools')} </>}
                children={<>
                    <div className="flex flex-wrap">
                        <SkillTag text="Git" level={3} />
                        <SkillTag text="Fork" level={3} />   
                        <SkillTag text="Docker" level={1} /> 
                    </div>
                    <div className="flex flex-wrap">
                        <SkillTag text="Azure DevOps" level={2} />
                        <SkillTag text="JIRA" level={3} />   
                        <SkillTag text="Jenkins" level={1} /> 
                    </div>
                    <div className="flex flex-wrap">
                        <SkillTag text="Postman" level={2} />
                    </div>
                    <div className="flex flex-wrap">
                        <SkillTag text="Google Analytics" level={1} />
                        <SkillTag text="SEO" level={1} />
                    </div>
                    <div className="flex flex-wrap">
                        <SkillTag text="Unity" level={3} />
                        <SkillTag text="Android Studio" level={2} />
                    </div>
                </>}
            />

            <SkillCard title={<> { t('skills.designer_tools')} </>}
                children={<>
                    <div className="flex flex-wrap">
                        <SkillTag text="Blender" level={2} />
                    </div>
                    <div className="flex flex-wrap">
                        <SkillTag text="Figma" level={3} />
                        <SkillTag text="Adobe Suite" level={3} />
                        <SkillTag text="SVG" level={2} />
                    </div>
                    <div className="flex flex-wrap">
                        <SkillTag text="Parametric Design" level={3} />
                        <SkillTag text="Graphic Design" level={3} />
                    </div>
                </>}
            />

            <SkillCard title={<> { t('skills.interest')} </>}
                children={<>
                    <div className="flex flex-wrap">
                        <SkillTag text="ThreeJS" level={3} />
                        <SkillTag text="React Three Fiber" level={3} />
                    </div>
                    <div className="flex flex-wrap">
                        <SkillTag text="WebGL" level={2} />
                        <SkillTag text="GLSL" level={2} />
                        <SkillTag text="Shader" level={2} />
                        <SkillTag text="OpenGL" level={1} />
                    </div>
                </>}
            />
            </div>
            </div>
    );
}

type SkillCardProps = {
    title:ReactElement,
    children: ReactElement
}

function SkillCard(props: SkillCardProps) { 
    return (
        <div className="flex flex-col sm:flex-row m-5 text-content-font font-light">
            <h5 className="sm:w-[100px] sm:text-right text-h5 mr-5 ">{props.title}</h5>
            <div className="text-h4 font-bold">
                { props.children}
            </div>
        </div>
    );
}


export default SkillPage;