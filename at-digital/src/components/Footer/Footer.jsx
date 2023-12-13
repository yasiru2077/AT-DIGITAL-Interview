import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div class="footer">
      <div className="footerContainer">
        <div className="footerPart1">
          <img src="./img/White-Logo.png" alt="" />
          <p>
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="footerPart2">
          <h3>Our Technologies</h3>
          <p>ReactJS</p>
          <p>Gatsby</p>
          <p>NextJS</p>
          <p>NodeJS</p>
          <p>GraphQL</p>
          <p>Laravel</p>
          <p></p>
        </div>
        <div className="footerPart3">
          <h3>Our Services</h3>
          <p>Social media Marketing</p>
          <p>Web & Mobile App Development</p>
          <p>Data & Analytics</p>
          <p>Google Marketing solutions</p>
          <p>Search Engine Optimization</p>
        </div>
      </div>
            <hr />
            <div className="footer-containerName">
            <p>Privacy Policy</p>|<p>Terms & Conditions</p>
            </div>

    </div>
  );
}

export default Footer;
