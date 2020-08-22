import React from "react";
import image from "../images/Car.png";

import "./Leftcontent.css";

export default function Leftcontent() {
  return (
    <div className="left-image">
      <img src={image} alt="Car" />
    </div>
  );
}
