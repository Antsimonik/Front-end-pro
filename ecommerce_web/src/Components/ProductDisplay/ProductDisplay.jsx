import React from "react";
import "./ProductDisplay.scss";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

function ProductDisplay(props) {
  const { product } = props;

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-left-img-list">
          <img src={product.image} alt="product.img" />
          <img src={product.image} alt="product.img" />
          <img src={product.image} alt="product.img" />
          <img src={product.image} alt="product.img" />
        </div>
        <div className="product-display-left-img">
          <img
            className="product-display-main-img"
            src={product.image}
            alt="product.img"
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_dull_icon} alt="star_dull_icon" />
          <p>(122)</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
