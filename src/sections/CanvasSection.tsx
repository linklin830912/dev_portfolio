import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function CanvasSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvas?.appendChild(renderer.domElement);
     }, []);
    return (
        //TODO: add special feature last
        <canvas className="w-[100%] h-[100%]" ref={canvasRef} />
    );
 }
export default CanvasSection;