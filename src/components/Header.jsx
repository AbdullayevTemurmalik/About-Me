import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <h1>TemurMalik Abdullayev</h1>
      </Link>

      <nav className={isOpen ? "nav-links mobile" : "nav-links"}>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          About Me
        </Link>
        <Link to="/skills" onClick={() => setIsOpen(false)}>
          Skills
        </Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>
          Projects
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </nav>

      <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}
