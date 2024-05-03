import React from "react";
import "./DescriptionBox.scss";

function DescriptionBox(props) {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-nav">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionBox-description">
        <p>An e-commerce website is online platform that....</p>
        <p>E-commerce websites typically display products or .....</p>
      </div>
    </div>
  );
}

export default DescriptionBox;
