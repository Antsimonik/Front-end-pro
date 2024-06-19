import React from "react";
import "./SCSS/loginSignup.scss";

function loginSignup(props) {
  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="You Name" name="" id="" />
          <input
            type="email"
            placeholder="Email 
          Address"
            name=""
            id=""
          />
          <input type="password" placeholder="Password" name="" id="" />
        </div>
        <button>Continue</button>
        <p className="loginSignup-login">
          Already have an account? <span>Login now</span>
        </p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continue, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default loginSignup;
