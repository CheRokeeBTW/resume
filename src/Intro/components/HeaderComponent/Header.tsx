import React from "react";
import './header.css'

const Header: React.FC = () => {
  return (
    <div className="headerWrapper">
    <header className="header">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    </div>
  );
};

export default Header;