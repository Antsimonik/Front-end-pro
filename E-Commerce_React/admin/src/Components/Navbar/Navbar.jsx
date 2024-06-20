import React from "react";
import "./Navbar.scss";
import navlogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.png";

function Navbar(props) {
  return (
    <div className="navbar">
      <img src={navlogo} alt="navlogo" className="navbar-logo" />
      <img src={navProfile} alt="navProfile" className="navbar-profile" />
    </div>
  );
}

export default Navbar;
