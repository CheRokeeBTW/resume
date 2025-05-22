import React, { useState, useEffect } from "react";
import './Stack.css';
import Technologies from "./components/Technologies/Technologies";
import Portfolio from "./components/Portfolio/Portfolio";

const Stack: React.FC = () => {

    return (
      <div className="stackWrapper">
        <Technologies />
        <Portfolio />
        </div>
      );
    };
    

export default Stack;