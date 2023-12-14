import React, { useEffect, useState } from "react";
import "./navbar.css";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const renderFooterContent = () => {
    if (windowWidth <= 375) {
      return (
        <>
          <img
            className="HamburgerLogo"
            src="./img/Group 2.png"
            onClick={toggleMenu}
            alt=""
          />
          {isMenuOpen && (
            <>
            
            <div className="Navmobile">
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
             
            </>
          )}
        </>
      );
    } else {
      return (
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
      );
    }
  };

  return (
    <div className="Navigation">
      <img className="NavbarLogo" src="./img/White-Logo.png" alt="" />
      {renderFooterContent()}
    </div>
  );
}

export default Navbar;
