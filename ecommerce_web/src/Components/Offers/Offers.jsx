import React from "react";
import "./Offers.scss";
import exclusive_image from "../Assets/exclusive_image.png";

function Offers(props) {
  return (
    <div className="offers">
      <div className="offers-left">
        <h2>Exclusive</h2>
        <h2>Offers For You</h2>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}

export default Offers;
