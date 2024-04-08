import { Link } from "react-router-dom";
import '../Navigation/navigation.css'

import React from 'react'

export const Navigation = () => {
  return (
    <nav className="nav">
        <ul className="nav-item">
            <li >
                <Link className="nav-link" to="/about">About me</Link>
            </li>
            <li >
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li >
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  );
}


export default Navigation;
