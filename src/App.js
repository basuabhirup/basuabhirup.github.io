import React, {useState, useEffect} from "react";
import './App.css';
import Hero from "./components/Hero/Hero"
import AboutMe from "./components/AboutMe/AboutMe"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"


function App() {
  const [minH, setMinH] = useState(window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight);

  function updateSize() {
    setMinH(
        window.innerHeight 
          || document.documentElement.clientHeight
          || document.body.clientHeight
      )
    
    document.querySelector('.app > *:first-child').style.minHeight = `${minH}px` || `100vh`;
  }

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
    }
  })
  
  return (
    <div className="app" onLoad={() => updateSize()}>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
