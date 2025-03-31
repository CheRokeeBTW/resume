import React from 'react';
import logo from './logo.svg';
import './App.css'
import MouseEffectBackground from './Intro/Intro';
import Stack from './Stack/Stack';
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
      <MouseEffectBackground />
      <Stack />
      <Footer />
    </div>
  );
}

export default App;
