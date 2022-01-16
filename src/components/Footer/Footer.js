import React from "react";

// Components
import { Link } from "gatsby";

// Styling
import "./style.scss";

const Footer = () => {
  const mail_data = `mailto:contact@rubennijhuis.com?subject=Let's build something great?body=I have this great idea that `;
  const className = "footer";

  return (
    <footer className={className}>
      <a className="email" href={mail_data}>
        contact@rubennijhuis.com
      </a>
      <div className="content">
        <div className="links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/journals">Journal</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/scan-me">Scan me</Link>
        </div>
        <div className="links links--external">
          <a target="_" href="https://github.com/rubennijhuis">
            Github
          </a>
          <a target="_" href="https://www.linkedin.com/in/ruben-nijhuis/">
            LinkedIn
          </a>
          <a target="_" href="https://twitter.com/nijhuis_ruben">
            Twitter
          </a>
          <a target="_" href="https://www.instagram.com/ruben__nijhuis/">
            Instagram
          </a>
          <a target="_" href="https://louderminds.studio">
            Louder Minds
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
