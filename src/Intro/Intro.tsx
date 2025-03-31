import React, { useState, useEffect } from "react";
import './Intro.css';
import DownloadBtn from "./components/downloadBtn";
import Header from "./components/Header";
import TypingEffect from "./components/TypingEffect";

const MouseEffectBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="bg"
    id = "home"
      style={{
        background: `radial-gradient(5000px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1))`,
      }}
    >
      <Header />
      <h1 style={{ color: "white", textAlign: "center" }}>
       My Name is Dmitry and I Love <TypingEffect />
      </h1>
      <DownloadBtn />
    </div>
    
  );
};

export default MouseEffectBackground;