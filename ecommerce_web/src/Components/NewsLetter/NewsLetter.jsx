import React from "react";
import "./NewsLetter.scss";

function NewsLetter(props) {
  return (
    <div className="news-letter">
      <h2>Get Exclusive Offers On You Email</h2>
      <p>Subscribe tu our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="you E-Mail id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
