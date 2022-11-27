import "../styles/Navbar.css";

import React from "react";
import odlaw from "../assets/odlaw.jpg";
import waldo from "../assets/waldo.jpeg";
import wizard from "../assets/wizard.jpeg";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="character-container">
        <img src={waldo} alt="waldo" />
        <img src={odlaw} alt="odlaw" />
        <img src={wizard} alt="wizard" />
      </div>
      <div className="timer">00:00</div>
    </div>
  );
};

export default Navbar;
