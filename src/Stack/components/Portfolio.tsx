import React, { useState, useEffect } from "react";
import './../Stack.css';
import Uganda from '../../images/uganda.png';
import Messanger from '../../images/messanger.png';
import Cards from '../../images/Untitled.png';
import Icon from '../../images/icon.png';
import Arrow from '../../images/arrow.png';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Browser from '../../images/browser-47.png';

const Portfolio: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    const handleClickFlags = () =>{
      window.location.href = "https://cherokeebtw.github.io/flagsReal/";
    }
  
    const handleClickCards = () =>{
      window.location.href = "https://cherokeebtw.github.io/SPA1/";
    }

    const handleClickMessanger = () =>{
      window.location.href = "https://github.com/CheRokeeBTW/Work";
    }
  
      return (
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 0.8 }}
        id = "work">
          <div className="portfolio">
            <h2>My Portfolio</h2>
            <div className="projects">
              <div className="project">
                <img src = {Uganda} />
                <div className="projectContent">
                <div className="projectInfo">
                <h3>Flags</h3>
                <div className="projectLink">
                <button onClick={handleClickFlags}>
                <img src={Browser}/>
                <h4>View Demo</h4>
                </button>
                </div>
                </div>
                </div>
                <span>React</span>
                <span>JavaScript</span>
              </div>
              <div className="project">
                <img src = {Messanger} style = {{width:"100%", height:"15rem"}}/>
                <div className="projectContent">
                <div className="projectInfo">
                <h3>Messanger</h3>
                <div className="projectLink">
                <button onClick={handleClickMessanger}>
                <img src={Browser}/>
                <h4>Source Code</h4>
                </button>
                </div>
                </div>
                </div>
                <span>React</span>
                <span>Nginx</span>
                <span>PostgreSQL</span>
                <span>JavaScript</span>
                <span>Framer Motion</span>
                <span>Docker</span>
              </div>
              <div className="project">
                <img src = {Cards} />
                <div className="projectContent">
                <div className="projectInfo">
                <h3>Cards</h3>
                <div className="projectLink">
                <button onClick={handleClickCards}>
                <img src={Browser}/>
                <h4>View Demo</h4>
                </button>
                </div>
                </div>
                </div>
                <span>NextJS</span>
                <span>Typescript</span>
                <span>Redux</span>
              </div>
            </div>
            </div>  
          </motion.div>
        );
      };
      
  
  export default Portfolio;