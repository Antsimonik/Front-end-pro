import React from "react";
import "./NewsLetter.scss";

function NewsLetter(props) {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On You Email</h1>
      <p>Subscribe tu our newsletter and stay updated</p>
      <div className="newsletter-email">
        <input type="email" placeholder="you E-Mail id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
