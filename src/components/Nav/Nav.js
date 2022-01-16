import React from "react";

// Components
import { Link } from "gatsby";

// Styling
import "./styling.scss"

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/" className="home">
        RN
      </Link>
      <ul className="links">
        <li>
          <Link className="links__link" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="links__link" to="/journals">
            Journal
          </Link>
        </li>
        <li>
          <Link className="links__link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
