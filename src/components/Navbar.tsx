import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        TypeScript Reference
      </a>
      <ul className="navbar-links">
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            <i className="icon"></i>One
          </a>
        </li>
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            <i className="icon"></i>Two
          </a>
        </li>
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            <i className="icon"></i>Three
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
