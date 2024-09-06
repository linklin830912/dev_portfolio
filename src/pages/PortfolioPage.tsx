import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function PortfolioPage() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "WebGL Builds/Build/WebGL Builds.loader.js",
        dataUrl: "WebGL Builds/Build/WebGL Builds.data",
        frameworkUrl: "WebGL Builds/Build/WebGL Builds.framework.js",
        codeUrl: "WebGL Builds/Build/WebGL Builds.wasm",
    });
    return <div className="flex items-center justify-center">
            <Unity unityProvider={unityProvider} style={{width:"800px"}}/>
        </div>;
 }
export default PortfolioPage;