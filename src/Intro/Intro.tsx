import React, { useState, useEffect } from "react";
import './Intro.css';
import DownloadBtn from "./components/downloadBtn";

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
    <div className="test"
      style={{
        background: `radial-gradient(5000px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1))`,
      }}
    >
      <h1 style={{ color: "white", textAlign: "center" }}>
        My name is Dmitry and I love coding
      </h1>
      <DownloadBtn />
    </div>
    
  );
};

export default MouseEffectBackground;