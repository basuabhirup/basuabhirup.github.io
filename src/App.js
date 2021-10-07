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
  
  const [minW, setMinW] = useState(window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth);

  function updateSize() {
    setMinH(
        window.innerHeight 
          || document.documentElement.clientHeight
          || document.body.clientHeight
      )

    setMinW(
      window.innerWidth 
        || document.documentElement.clientWidth
        || document.body.clientWidth
    )
    
    document.querySelector('.app > *:first-child').style.minHeight = `${minH}px` || `100vh`;
    document.querySelectorAll('.app > *:nth-child(n)').forEach(element => {
      element.style.minWidth = `${.95 * minW}px` || `95vw`;
    })
  }

  useEffect(() => {
    window.addEventListener('load', updateSize);
    window.addEventListener('resize', updateSize);
    window.addEventListener('click', updateSize);
    window.addEventListener('scroll', updateSize);
    return () => {
      window.removeEventListener('load', updateSize);
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('click', updateSize);
      window.removeEventListener('scroll', updateSize);
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
