import React, { useState, useEffect } from "react";
import './technologies.css';
import ReactLogo from '../../../images/react.png';
import NextJS from '../../../images/nextjs.png';
import TS from '../../../images/ts.png';
import Figma from '../../../images/figma.png';
import Git from '../../../images/git.png';
import Docker from '../../../images/docker.png';
import Nginx from '../../../images/nginx.png';
import Pg from '../../../images/postgr.png';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";



const Technologies: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 0.8 }}
        >
          <div className = "stack">
              <h1>Technologies I use</h1>
              <p>I'm proficient with these following technologies that I use within my projects.</p>
            <div className = "stackComponents">
              <div className = "technology">
                <div className="technologyImg" style = {{backgroundColor: "rgb(89, 107, 107)"}}>
                  <img src = {ReactLogo} />
                  </div>
              <div className="technologyDecription">
              <h2>React</h2>
              <span>JavaScript Library</span>
              </div>
              </div>
              <div className = "technology">
                <div className="technologyImg" style = {{backgroundColor: "rgb(107, 109, 109)"}}>
                  <img src = {NextJS}  style ={{width:"2rem", height:"2rem"}} />
                  </div>
              <div className="technologyDecription">
              <h2>NextJS</h2>
              <span>React Framework</span>
              </div>
              </div>
              <div className = "technology">
                <div className="technologyImg" style = {{backgroundColor: "rgb(94, 99, 99)"}}>
                  <img src = {TS} style = {{ width:"2rem", height:"2.2rem"}}/>
                  </div>
              <div className="technologyDecription">
              <h2>TypeScript</h2>
              <span>JS on Steroids</span>
              </div>
              </div>
              <div className = "technology">
                <div className="technologyImg" style = {{backgroundColor: "rgb(24, 85, 32)"}}>
                  <img src = {Figma} style ={{ width:"1.8rem", height:"2.2rem"}}/>
                  </div>
              <div className="technologyDecription">
              <h2>Figma</h2>
              <span>Design Tool</span>
              </div>
              </div>
              <div className = "technology">
                <div className="technologyImg" style = {{backgroundColor: "rgb(105, 51, 26)"}}>
                  <img src = {Git} style ={{ width:"2.2rem", height:"2.2rem"}}/>
                  </div>
              <div className="technologyDecription">
              <h2>Git</h2>
              <span>Version Control</span>
              </div>
              </div>
              <div className = "technology">
                <div className="technologyImg" style = {{backgroundColor: "rgb(14, 46, 82)"}}>
                  <img src = {Docker} />
                  </div>
              <div className="technologyDecription">
              <h2>Docker</h2>
              <span>Platform for building and deploying</span>
              </div>
              </div>
              <div className = "technology">
                <div className="technologyImg" style = {{backgroundColor: "rgb(12, 73, 22)"}}>
                  <img src = {Nginx} style ={{ width:"2.6rem", height:"2.5rem"}}/>
                  </div>
              <div className="technologyDecription">
              <h2>Nginx</h2>
              <span>Web Server Software</span>
              </div>
              </div>
              <div className = "technology">
                <div className="technologyImg" style = {{backgroundColor: "rgb(64, 64, 110)"}}>
                  <img src = {Pg} style ={{ width:"2.4rem", height:"2.2rem"}}/>
                  </div>
              <div className="technologyDecription">
              <h2>PostgreSQL</h2>
              <span> Relational Database</span>
              </div>
              </div>
            </div>
          </div>
          </motion.div>
    );
};

export default Technologies;

