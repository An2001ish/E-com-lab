import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";
import slider1 from "./slider1.jpg";
import slider2 from "./slider2.jpg";
import slider3 from "./slider3.jpg";

function Slider() {
  const slider = [slider1, slider2, slider3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slider.length;
      setCurrentIndex(nextIndex);
      sliderRef.current.style.transform = `translateX(-${nextIndex * 100}%)`;
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, slider.length]);

  return (
    <div className="slider-container">
      <ul className="slider-images" ref={sliderRef}>
        {slider.map((image, index) => (
          <li key={index}>
          <p><span>Ends Tomorrow</span>
          <span>GET 25% OFF</span>
          </p>
            <img src={image} alt="adasd" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Slider;
