import React from "react";
import "./Breadcrum.scss";
import arrow_icon from "../Assets/breadcrum_arrow.png";

function Breadcrum(props) {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="arrow_icon" />
      SHOP
      <img src={arrow_icon} alt="arrow_icon" />
      {product.category}
      <img src={arrow_icon} alt="arrow_icon" />
      {product.name}
    </div>
  );
}

export default Breadcrum;
