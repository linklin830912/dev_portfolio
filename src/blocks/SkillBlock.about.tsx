import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";

function SkillBlock() { 
    const { t } = useTranslation(["about"]);
    return (
        <div className="flex flex-row flex-wrap">
           
            <SkillCard title={<> { t('skills.programming_professional')} </>}
                children={<>
                    React / Next JS / Redux / Hooks / <br />
                    JavaScript / TypeScript ES6+ / <br />
                    HTML / CSS / Tailwind / SASS / Emotion / RWD / <br />
                    NodeJS / NPM / Webpack / <br />
                    C# / .Net / RESTful API / WPF / <br />
                    Microsoft SQL / Redis / <br />
                    Python / NumPy / 
                </>}
            />
            
            <SkillCard title={<> { t('skills.programming_academic')} </>}
                children={<>
                    C++ <br />
                    Java <br />
                    Pytorch
                </>}
            />

            <SkillCard title={<> { t('skills.developer_tools')} </>}
                children={<>
                    Git / Fork / <br />
                    DevOps / JIRA / Jenkins / <br />
                    Postman / <br />
                    Google Analytics / SEO / <br />
                    Android Studio
                </>}
            />

            <SkillCard title={<> { t('skills.designer_tools')} </>}
                children={<>
                    Unity / Blender /<br />
                    Figma / Adobe Suite / SVG /<br />
                    Parametric Design / Graphic Design
                </>}
            />

            <SkillCard title={<> { t('skills.interest')} </>}
                children={<>
                    Three JS / React Three Fiber <br />
                    WebGL / GLSL / Shader /
                </>}
            />
        </div>
    );
}

type SkillCardProps = {
    title:ReactElement,
    children: ReactElement
}

function SkillCard(props: SkillCardProps) { 
    return (
        <div className="flex flex-col sm:flex-row m-5">
            <h5 className="sm:w-[100px] sm:text-right text-content-font text-h5 mr-5">{props.title}</h5>
            <h4 className="text-content-font text-h4 font-bold">
                { props.children}
            </h4>
        </div>
    );
}

export default SkillBlock;