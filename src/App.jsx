import { useState } from 'react';
import MenuBar from './MenuBar';
import Card from './Card';
import Home from './Home';
import Skills from './Skills';
import Experience from './Experiences';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Fade from "react-reveal/Fade"
import './App.css';

function App() {
  return (
  <>
    <div>
      <MenuBar />
      <Card />
      <Fade bottom duration={1000}>
      <Home />
      </Fade>
      <Fade bottom duration={1000}>
      <Skills />
      </Fade>
      <Fade bottom duration={1000}>
      <Experience />
      </Fade>
    </div>
  </>
  );
}

export default App;
