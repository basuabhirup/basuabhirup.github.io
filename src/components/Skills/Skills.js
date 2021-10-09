import React from 'react';
import SkillCard from "./SkillCard";
import "./Skills.css";
import skills from "./skills-list";


function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <section className="cards container">
      {skills.map((skill, i) => (
        <SkillCard 
          key = {i}
          IconTitle={skill.title}
          IconPath={skill.path}
          SkillName={skill.name}
        />
      ))}
      </section>
    </section>
  )
}

export default Skills
