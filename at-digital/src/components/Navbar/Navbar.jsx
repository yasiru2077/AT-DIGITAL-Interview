import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="Navigation">
      <img className="NavbarLogo" src="./img/White-Logo.png" alt="" />
      <ul>
        <li>
          <a href="#home">SERVICES</a>
        </li>
        <li>
          <a href="#news">ABOUT US</a>
        </li>
        <li>
          <a href="#contact">ABOUT US</a>
        </li>
        <li>
          <a href="#about">CAREERS</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
