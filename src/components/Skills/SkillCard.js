import React from 'react'
import "./SkillCard.css";

function SkillCard(props) {
  // const [color, setColor]
// document.querySelector('.card').addEventListener('click', function() {
//   this.style.fill = "black"
// })

  return (
    <div className="card">
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>{props.IconTitle}</title>
        <path d={props.IconPath}/>
      </svg>
      <p>{props.SkillName}</p>
    </div>
    
  )
}

export default SkillCard;