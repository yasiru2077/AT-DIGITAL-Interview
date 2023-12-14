import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="Navigation">
      <img src="./img/White-Logo.png" alt="" />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
