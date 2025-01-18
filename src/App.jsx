import { useState } from 'react';
import MenuBar from './MenuBar';
import Card from './Card';
import Home from './Home';
import Skills from './Skills';
import Experience from './Experiences';
import Fade from "react-reveal/Fade"
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeMode = () => {
    const element = document.body;
    element.classList.toggle("dark-mode");
    setIsDarkMode(prevMode => !prevMode); 
  };
  return (
  <>
    <div>
      <button className="mode" onClick={changeMode}>{isDarkMode? "☀": "☽"}</button>
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
