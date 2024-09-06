import React, { useEffect, useRef, useState } from "react";

type TitleCanvasProps = {
    title:string
}
function TitleCanvas(props:TitleCanvasProps) { 
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollOffsetX, setScrollOffsetX] = useState<number>(0);
    useEffect(() => {
        let position = containerRef.current?.getBoundingClientRect().top ?? 0;
        setScrollOffsetX(window.scrollY - position - 200);
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
           
            if (scrollPosition - position > -5000 && scrollPosition - position < 5000) { 
                setScrollOffsetX(scrollPosition - position-200)
            }
        };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    }, []);

    return <div ref={containerRef} className="hidden lg:block absolute z-0">
        
        <h1 className={`text-h0 font-bold top-[200px] text-content-sub-font whitespace-nowrap relative`} style={{ left: `${scrollOffsetX}px` }} >
            { props.title }
        </h1>
    </div>
}

export default TitleCanvas; 