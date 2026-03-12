import React, { useState, useEffect } from "react";
import './Intro.css';
import DownloadBtn from "./components/DownloadBtnComponent/DownloadBtn";
import Header from "./components/HeaderComponent/Header";
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
       Frontend developer
      </h1>
      <p style={{ color: "white", textAlign: "center", fontSize: "18px"}}>
        I’m an International Business graduate who now works as a software developer, applying my knowledge through coding projects. 
      </p>
      <p className="contact-link">
        GitHub: <a href="https://github.com/CheRokeeBTW">@CheRokeeBTW</a>
      </p>
      <p className="contact-link">
        Email: <a href="mailto:d.evstigneev99@yandex.ru">d.evstigneev99@yandex.ru</a>
      </p>
      <DownloadBtn />
    </div>
    
  );
};

export default MouseEffectBackground;