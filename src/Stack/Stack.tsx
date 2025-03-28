import React, { useState, useEffect } from "react";
import './Stack.css';

const Stack: React.FC = () => {

    return (
      <div className="stackWrapper">
            <h1>Technologies I use</h1>
            <p>I'm proficient with these following technologies that I use within my projects.</p>
        <div className = "stack">
          <div className = "stackComponents">
            <div className = "technology"><h2>Test</h2></div>
            <div className = "technology"><h2>Test</h2></div>
            <div className = "technology"><h2>Test</h2></div>
            <div className = "technology"><h2>Test</h2></div>
            <div className = "technology"><h2>Test</h2></div>
            <div className = "technology"><h2>Test</h2></div>
            <div className = "technology"><h2>Test</h2></div>
            <div className = "technology"><h2>Test</h2></div>
          </div>
        </div>
        </div>
      );
    };
    

export default Stack;