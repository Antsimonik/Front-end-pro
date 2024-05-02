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
        <div className="product-display-right-stars">
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_dull_icon} alt="star_dull_icon" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-prices-old">
            ${product.old_price}
          </div>
          <div className="product-display-right-prices-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product-display-right-description">
          <p>A lightweigh, usually knitted, pullover shirt, close-fitting...</p>
        </div>
        <div className="product-display-right-size">
          <h2>Select Size</h2>
          <div className="product-display-right-size-all">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="product-display-right-category">
          <span>Category :</span> Women, T-Shirt, Crop Top
        </p>
        <p className="product-display-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
