import React from "react";
import "./Hero.scss";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

function Hero(props) {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="img.hand" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <h3>Latest Collection</h3>
          <img src={arrow_icon} alt="img_arrow_icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="img_hero_image" />
      </div>
    </div>
  );
}

export default Hero;
