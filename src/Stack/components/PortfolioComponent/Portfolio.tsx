import React, { useRef, useState, useEffect } from "react";
import './Portfolio.css';
import Uganda from '../../../images/uganda.png';
import Messanger from '../../../images/messanger.png';
import Cards from '../../../images/Untitled.png';
import Dino1 from '../../../images/dino1.png';
import Dino2 from '../../../images/dino2.png';
import Browser from '../../../images/browser-47.png';
import Map from '../../../images/map.png';
import Map2 from '../../../images/map2.png';
import Flag from '../../../images/flag2.png';
import GuessEvent from '../../../images/guessEvent.png';
import Rogue from '../../../images/rogue1.png';
import Rogue1 from '../../../images/rogue2.png';
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import Arrow from '../../../images/arrow1.png';
import { Navigation, Pagination, A11y, Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    title: "Guess the Event",
    image: [GuessEvent],
    technologies: ["NextJS", "Redis", "PostgreSQL", "Tailwind CSS", "NeonDB"],
    description: "Site with different questions about numerous events (could be game date launch/history trivia) and collects data about answers so users can compare their performance with other players. Provides daily 5 different questions and refreshes every day",
    buttonText: "View Demo",
    url: "https://guess-the-event.vercel.app/",
  },
  {
    title: "Map",
    image: [Map, Map2],
    technologies: ["React", "JavaScript", "SCSS", "TypeScript"],
    description: "Map of all Moscow region with all the restaurants, cafes, banks and so on. Map has routing, registration with e-mail verification, users can create lists with favourite addresses or add their own organizations to the map.",
    buttonText: "View Demo",
    url: "https://map.ktsf.ru",
  },
  {
    title: "Dino Game",
    image: [Dino1, Dino2],
    technologies: ["JS", "HTML", "CSS"],
    description: "Fun modern day copy of google dino game, where u need to avoid obstacles and survive as long as you can!", 
    buttonText: "View demo",
    url: "https://dino-game-ochre.vercel.app/",
  },
  {
    title: "Dungeon Game",
    image: [Rogue, Rogue1],
    technologies: ["JS", "HTML", "CSS"],
    description: "Web game where you need to play as a knight and escape from dark dungeon, dnd fighting mechanics, dialogs with nps, inventory system with different weapons and equipment",
    buttonText: "Source Code",
    url: "https://rogue-game-git-main-cherokees-projects.vercel.app/",
  },
  {
    title: "Flags",
    image: [Uganda, Flag],
    technologies: ["React", "JavaScript"],
    description: "Fun game where you have to guess the country by its flag",
    buttonText: "View Demo",
    url: "https://cherokeebtw.github.io/flagsReal/",
  },
];

const Portfolio: React.FC = () => {
  const [currSlide, setCurrSlide] = useState<number>(0);

  const handleNext = () => {
    setCurrSlide((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );

  };
  const handlePrev = () => {
    setCurrSlide((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const project = projects[currSlide];
  const projLength = projects[currSlide].image.length;

  return (
    <div className="portfolioWrapper" id = "projects">
      <div className="portfolio">
        <h2>My Portfolio</h2>
        <div className="projectWrapper">
          <img 
          src = {Arrow}
          onClick={handlePrev}
          style={{transform: `rotate(180deg)`}}
          />
              <div key = {currSlide} className="project">
                <div className="projectContent">
                  <div className="projectInfo">
                    <h3>{project.title}</h3>
                    <div className="projectLink">
                      <button onClick={() => window.location.href = project.url}>
                        <img src={Browser} alt="Open" />
                        <h4>{project.buttonText}</h4>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="imgWrapper">
                {project.image.map((img, index) => (
                <img 
                src={img} 
                alt={`index`}
                key={index}
                style={{ height: projLength > 1 ? "250px" : "auto" }}
                className="projectImage" />
                ))}
                </div>
                    <div className="projectDescription">
                      {project.description}
                    </div>
                <div className="techStack">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
            </div>
             <img 
             src = {Arrow} 
             onClick={handleNext}
             />
            </div>
      </div>
      </div>
  );
};

export default Portfolio;