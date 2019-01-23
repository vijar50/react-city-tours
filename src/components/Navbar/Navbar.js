import React from "react";
import "./Navbar.scss";
import logo from "../../logo.jpg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Meme Tours Logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
