import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <section id="cta">
      <div>
        <h2><em>Discuss a project, or just want to say hi?</em></h2>
        <br />
        <h3>My inbox is open for you!</h3>
      </div>
      
      <br />
      <div class="contact">
        <a title="E-Mail" href="mailto:basu.abhirup27@gmail.com" target="_blank" rel="noreferrer"><i class="bi bi-envelope" /></a>
        <a title="LinkedIn" href="https://www.linkedin.com/in/basu-abhirup/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin" /></a>
        <a title="Twitter" href="https://twitter.com/basu_abhirup27" target="_blank" rel="noreferrer"><i class="bi bi-twitter" /></a>
      </div>
      <div className="location">
        <p><i class="bi bi-geo-alt-fill"></i> Kolkata, WB, India</p>
      </div>
      <footer>
        <p>©{new Date().getFullYear()} Abhirup Basu</p>
      </footer>
    </section>
  )
}

export default Footer
