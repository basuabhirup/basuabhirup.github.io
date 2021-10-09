import React from 'react';
import "./Hero.css";
import svg from "./hero.svg";


function Hero() {
  
  return (
    <section id="hero">
      <nav className="navbar navbar-light navbar-expand-xl">
        <div className="container-xxl">
          <button className="navbar-toggler" name="button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about-me">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#cta">Contact Me</a>
              </li>
            </ul>  
          </div>       
        </div>
      </nav>
      <section className="hero container">
        <img src={svg} alt="Hero" />
        <h1>Abhirup Basu</h1>
        <h2>Web Developer</h2>
        <a className="btn btn-primary" 
          href="https://drive.google.com/file/d/1APo04SQrlhSFHJlkF9mwgPMxXE7YQVFh/view?usp=sharing"
          target="_blank" rel="noreferrer"
        > 
          My Resume &nbsp; <i class="bi bi-box-arrow-up-right"></i>
        </a>
        <div className="social-icons">
          <a href="https://github.com/basuabhirup" target="_blank" rel="noreferrer"><i class="bi bi-github" /></a>
          <a href="https://twitter.com/basu_abhirup27" target="_blank" rel="noreferrer"><i class="bi bi-twitter" /></a>
          <a href="https://www.linkedin.com/in/basu-abhirup/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin" /></a>
        </div>
      </section>
    </section>
  )
}

export default Hero
