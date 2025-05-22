import React, { useRef } from "react";
import './Portfolio.css';
import Uganda from '../../../images/uganda.png';
import Messanger from '../../../images/messanger.png';
import Cards from '../../../images/Untitled.png';
import Browser from '../../../images/browser-47.png';
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    title: "Flags",
    image: Uganda,
    technologies: ["React", "JavaScript"],
    buttonText: "View Demo",
    url: "https://cherokeebtw.github.io/flagsReal/",
  },
  {
    title: "Messanger",
    image: Messanger,
    technologies: ["React", "Nginx", "PostgreSQL", "JavaScript", "Framer Motion", "Docker"],
    buttonText: "Source Code",
    url: "https://github.com/CheRokeeBTW/Work",
  },
  {
    title: "Cards",
    image: Cards,
    technologies: ["NextJS", "Typescript", "Redux"],
    buttonText: "View Demo",
    url: "https://cherokeebtw.github.io/SPA1/",
  },
];

const Portfolio: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      id="work"
    >
      <div className="portfolio">
        <h2>My Portfolio</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y ]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000, 
            disableOnInteraction: true,
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project">
                <img src={project.image} alt={project.title} className="projectImage" />
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
                <div className="techStack">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Portfolio;