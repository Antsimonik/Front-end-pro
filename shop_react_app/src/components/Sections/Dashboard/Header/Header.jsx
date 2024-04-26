import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../../images/logo.png";
import shoppingCart from "../../../../images/shoppingCart.png";
import "./_header.scss";

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <Link to="/">
            <img src={logo} alt="logo" height="45" />
          </Link>
          <div className="header__info">
            Hi,
            <Link to="login" class="header__user" id="headerUser">
              Log in
            </Link>
            <div className="header__shop">
              <Link to="/account" id="headerShoppingCart">
                <img src={shoppingCart} alt="shopping cart" height={20} />
                <span
                  className="header__shop--count"
                  id="headerShoppingCartCount"
                >
                  0
                </span>
              </Link>
            </div>
          </div>
          <button className="header__logout" id="headerLogout">
            Log out
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
