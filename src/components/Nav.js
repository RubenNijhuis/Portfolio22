import { Link } from 'gatsby';
import React from 'react'

const Nav = () => (
    <nav className="nav">
        <Link to="/" className="nav__home">RN</Link>
        <ul className="nav__links">
            <li><Link className="nav__links__link" to="/about">About</Link></li>
            <li><Link className="nav__links__link" to="/projects">Projects</Link></li>
            <li><Link className="nav__links__link" to="/journals">Journal</Link></li>
        </ul>
    </nav>
)

export default Nav;