import React, { useState, useEffect } from "react";
import './Stack.css';
import Technologies from "./components/TechnologiesComponent/Technologies";
import Portfolio from "./components/PortfolioComponent/Portfolio";

const Stack: React.FC = () => {

    return (
      <div id = "about" className="stackWrapper">
        <Technologies />
        <Portfolio />
        </div>
      );
    };
    

export default Stack;