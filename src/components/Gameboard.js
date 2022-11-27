import "../styles/Gameboard.css";

import React from "react";
import level1 from "../assets/level-1.jpg";

const Gameboard = () => {
  return (
    <div className="Gameboard">
      <img src={level1} alt="background" className="background-image" />
    </div>
  );
};

export default Gameboard;
