import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import AboutMe from "./components/AboutMe/AboutMe"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
