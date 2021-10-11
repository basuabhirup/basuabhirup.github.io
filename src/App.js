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

  function toggleArrow() {
    if (window.scrollY > window.innerHeight / 2) {
      document.querySelector('.up-arrow').style.visibility = "visible";
    } else {
      document.querySelector('.up-arrow').style.visibility = "hidden";
    }
  }

  function goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    window.addEventListener('scroll', toggleArrow);
    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('scroll', toggleArrow);
    }
  })
  
  return (
    <div className="app" onLoad={() => updateSize()}>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
      <button onClick={goToTop} className="up-arrow" title="Go to top">
        <i class="bi bi-chevron-up"></i>
      </button>
    </div>
  );
}

export default App;
