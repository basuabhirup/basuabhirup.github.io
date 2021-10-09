import React from 'react';
import ProjectCard from "./ProjectCard";
import projects from "./proejcts-list";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
    <hr />
      <h2>Projects</h2>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
      {projects.map((project, i) => (
        <div className={i === 0 ? "carousel-item container-fluid active" : "carousel-item container-fluid"}>
          <div className="testimonial-text">
            <ProjectCard     
                key={project.imgAlt}            
                Title={project.title}
                ImageSource={project.imgSrc}
                ImageAlt={project.imgAlt}
                TechStack={project.techStack}
                GitHub={project.gitHubURL}
                LiveSite={project.liveSiteURL}
            />            
          </div>
        </div>
        ))
      }
      </div>
      <button className="carousel-control-prev" type="button" 
        data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" 
        data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <a 
      href="https://github.com/basuabhirup?tab=repositories&q=&type=source" 
      target="_blank" rel="noreferrer" 
      className="btn btn-primary"
    >
      See All Projects &nbsp; <i class="bi bi-box-arrow-up-right"></i>
    </a>
    </section>
  )
}

export default Projects
