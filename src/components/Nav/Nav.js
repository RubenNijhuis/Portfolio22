import React from "react";

// Components
import { Link } from "gatsby";

// Styling
import "./styling.scss";

const Nav = () => {
  const className = "nav";

  return (
    <nav className={className}>
      <div className="links">
        <div className="col--home">
          <Link to="/" className="home">
            RN
          </Link>
        </div>
        <div className="col--main">
          <Link to="/projects">Projects</Link>
          <Link to="/journal">Journal</Link>
        </div>
        <div className="col--secondary">
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
