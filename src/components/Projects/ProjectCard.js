import React from 'react';
import "./ProjectCard.css";

function ProjectCard(props) {
  console.log(props.TechStack.join(", "));
  return (
    <div className="project-card">
      <img src={props.ImageSource} alt={props.ImageAlt} />
      <h3 className="project-title">{props.Title}</h3>
      <div className="project-details">
        <div className="project-tech-stack">
          {props.TechStack.map(tech => (
            <span className="tech">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={props.GitHub} target="_blank" rel="noreferrer"><i class="bi bi-github" /></a>
          <a href={props.LiveSite} target="_blank" rel="noreferrer"><i class="bi bi-globe2" /></a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
