import React, { useEffect, useRef, useState } from "react";

type TitleCanvasProps = {
    title: string
    offsetY?: number
}
function TitleCanvas(props:TitleCanvasProps) { 
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollOffsetX, setScrollOffsetX] = useState<number>(0);
    useEffect(() => {        
        let position = containerRef.current?.getBoundingClientRect().top ?? 0;
        const posX = containerRef.current?.getBoundingClientRect().x ?? 0;
        const width = containerRef.current?.getBoundingClientRect().width ?? 0;

        setScrollOffsetX(window.scrollY - position-(posX));
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
           
            if (scrollPosition - position > -width && scrollPosition - position < width) { 
                setScrollOffsetX(scrollPosition - position-(posX))
            }
        };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    }, []);

    return <div ref={containerRef} className="hidden h-[100vh] lg:block absolute z-20 pointer-events-none">        
        <h1 className={`text-h0 font-black top-[${props.offsetY ? props.offsetY:"200"}px] text-content-sub-font opacity-50 whitespace-nowrap relative`} style={{ left: `${scrollOffsetX}px`, top:"25%" }} >
            { props.title }
        </h1>
    </div>
}

export default TitleCanvas; 