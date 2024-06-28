import React, { useState, useEffect, Fragment } from "react";
import { getUsers, addUser } from "../../../services/userService";

function Container(props) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUser(data);
    });
  }, []);

  console.log(user);

  return (
    <Fragment>
      <div class="container">
        <div class="columns">
          <form id="loginForm" class="userForm">
            <h2 class="title">Secure Sign In</h2>
            <p class="desription">For current customers</p>

            <div class="error">Invalid email address or password.</div>

            <label>
              <input
                type="email"
                placeholder="Email Address"
                data-name="email"
                required
              />
            </label>

            <label>
              <input
                type="password"
                placeholder="Password"
                data-name="password"
                required
              />
            </label>

            <button class="btn">Sign in</button>
          </form>

          <form id="registrationForm" class="userForm">
            <h2 class="title">Quick Registration</h2>
            <p class="desription">For new customers</p>

            <div class="error">Invalid email address or password.</div>

            <label>
              <input
                type="text"
                placeholder="Full name"
                data-name="name"
                required
              />
            </label>

            <label>
              <input
                type="email"
                placeholder="Email Address"
                data-name="email"
                required
              />
            </label>

            <label>
              <input
                type="password"
                placeholder="Password"
                data-name="password"
                required
              />
            </label>

            <label>
              <input
                type="password"
                placeholder="Verify Password"
                data-name="passwordVerify"
                required
              />
            </label>

            <button class="btn">Create Account</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Container;
