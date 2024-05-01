import React, { useEffect, useState } from "react";
import "./Slider.css";
import slider1 from "./slider1.jpg";
import slider2 from "./slider2.jpg";
import slider3 from "./slider3.jpg";

function Slider() {
  const [showimg, setShowimg] = useState(0);
  const slider = [slider1, slider2, slider3];

  return (
    <div className="slider-container">
      {slider.map((image, index) => (
        <div key={index} className="slider-image">
          <img src={image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Slider;
