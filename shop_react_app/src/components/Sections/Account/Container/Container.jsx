import React, { Fragment } from "react";

import offRoad from "../../../../images/products/offRoad.png";
import bus from "../../../../images/products/bus.png";

function Container(props) {
  return (
    <Fragment>
      <div class="container">
        <div class="shoppingCart__container">
          <div class="table__container">
            <table class="order__table" id="orderTable">
              <caption>Ordered Items</caption>
              <thead>
                <tr>
                  <th>Item Description</th>
                  <th>Price</th>
                  <th>Sale</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="item__info">
                      <img src={bus} alt="Bus" height="100" />
                      <div>
                        <p class="item__info--title">Bus</p>
                      </div>
                    </div>
                  </td>
                  <td>$300</td>
                  <td>
                    <span class="item__sale">- 10%</span>
                  </td>
                  <td>1</td>
                  <td>$297</td>
                </tr>
                <tr>
                  <td>
                    <div class="item__info">
                      <img src={offRoad} alt="Off Road" height="100" />
                      <div>
                        <p class="item__info--title">Off Road</p>
                      </div>
                    </div>
                  </td>
                  <td>$600</td>
                  <td>-</td>
                  <td>2</td>
                  <td>$1200</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="order__summary">
            <table>
              <caption>My Info</caption>
              <tbody>
                <tr>
                  <th>Name:</th>
                  <td id="userInfoName">Taras</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td id="userInfoEmail">taras.grygorovych@gmail.com</td>
                </tr>
              </tbody>
            </table>
            <div class="order__summary--btns">
              <button class="btn delete__acc" type="button" id="deleteAcc">
                Delete account
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Container;
