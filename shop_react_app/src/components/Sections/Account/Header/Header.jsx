import React, { Fragment } from "react";
import logo from "../../../../images/logo.png";
import shoppingCart from "../../../../images/shoppingCart.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <Fragment>
      <header class="header">
        <div class="container">
          <div class="header__container">
            <Link to="/">
              <img src={logo} alt="logo" height="45" />
            </Link>
            <div class="header__info">
              Hi,
              <Link to={"/login"} class="header__user" id="headerUser">
                Log in
              </Link>
              <div class="header__shop">
                <Link to={"/account"} id="headerShoppingCart">
                  <img src={shoppingCart} alt="shopping cart" height="20" />
                  <span
                    class="header__shop--count"
                    id="headerShoppingCartCount"
                  >
                    0
                  </span>
                </Link>
              </div>
              <button class="header__logout" id="headerLogout">
                Log out
              </button>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
