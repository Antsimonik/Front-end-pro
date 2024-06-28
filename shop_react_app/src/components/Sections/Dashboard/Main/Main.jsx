import React, { Fragment, useEffect, useState } from "react";
import { getList } from "../../../../services/productServices";
import "../../../../css/_product.sass";
import "../../../../css/_category.sass";
import "../../../../css/base.sass";

import aircraftCarrier from "../../../../images/products/aircraftCarrier.png";
import shoppingCart from "../../../../images/shoppingCart.png";
import boat from "../../../../images/products/boat.png";
import speedBoat from "../../../../images/products/speedBoat.png";
import bus from "../../../../images/products/bus.png";
import minibus from "../../../../images/products/minibus.png";
import schoolBus from "../../../../images/products/schoolBus.png";
import suv from "../../../../images/products/suv.png";

function Main(props) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getList().then((data) => {
      setProduct(data);
    });
  }, []);

  function kebabToCamel(str) {
    return str.replace(/(-[a-z])/g, (match) => match[1].toUpperCase());
  }

  const updatedProduct = product.map((item) => {
    item.img = kebabToCamel(item.img);
    return item;
  });

  const getClassSale = (item) => {
    return item.sale ? `product__sale` : `none`;
  };

  // const getCategory = (item) => {
  //   return item.category ? item.category !== item.category : ``;
  // };

  return updatedProduct.length ? (
    <Fragment>
      <main>
        <div className="container" id="categoriesContainer">
          {updatedProduct.map((item) => (
            <section className="category" data-name={item.category}>
              <h2>{item.category}</h2>
              <div className="category__container">
                <div key={item.id} data-id={item.id} className="product">
                  <img src={item.img} alt={item.title} height="80" />
                  <p className="product__title">{item.title}</p>
                  <div className={getClassSale(item)}>
                    <span className="product__sale--old">${item.price}</span>
                    <span className="product__sale--percent">
                      %{item.salePercent}
                    </span>
                  </div>
                  <div className="product__info">
                    <span className="product__price">${item.price}</span>
                    <button className="product__cart">
                      <img src={shoppingCart} alt="shopping cart" height="20" />
                    </button>
                  </div>
                </div>
                {/* <div data-id="2" class="product">
                <img src={boat} class="product__img" alt="Boat" height="80" />
                <p class="product__title">Boat</p>
                <div class="product__info">
                  <span class="product__price">$700</span>
                  <button class="product__cart">
                    <img src={shoppingCart} alt="shopping cart" height="20" />
                  </button>
                </div>
              </div>
              <div data-id="16" class="product">
                <img
                  src={speedBoat}
                  class="product__img"
                  alt="Speed Boat"
                  height="80"
                />
                <p class="product__title">Speed Boat</p>
                <div class="product__sale">
                  <span class="product__sale--old">$2000</span>
                  <span class="product__sale--percent">-34%</span>
                </div>
                <div class="product__info">
                  <span class="product__price">$1998</span>
                  <button class="product__cart">
                    <img src={shoppingCart} alt="shopping cart" height="20" />
                  </button>
                </div>
              </div> */}
              </div>
            </section>
          ))}
          {/* <section class="category" data-name="Bus">
            <h2>Bus</h2>
            <div class="category__container">
              <div data-id="3" class="product">
                <img src={bus} class="product__img" alt="Bus" height="80" />
                <p class="product__title">Bus</p>
                <div class="product__sale">
                  <span class="product__sale--old">$300</span>
                  <span class="product__sale--percent">-10%</span>
                </div>
                <div class="product__info">
                  <span class="product__price">$297</span>
                  <button class="product__cart">
                    <img src={shoppingCart} alt="shopping cart" height="20" />
                  </button>
                </div>
              </div>
              <div data-id="9" class="product">
                <img
                  src={minibus}
                  class="product__img"
                  alt="Minibus"
                  height="80"
                />
                <p class="product__title">Minibus</p>
                <div class="product__sale">
                  <span class="product__sale--old">$700</span>
                  <span class="product__sale--percent">-5%</span>
                </div>
                <div class="product__info">
                  <span class="product__price">$699</span>
                  <button class="product__cart">
                    <img src={shoppingCart} alt="shopping cart" height="20" />
                  </button>
                </div>
              </div>
              <div data-id="13" class="product">
                <img
                  src={schoolBus}
                  class="product__img"
                  alt="School Bus"
                  height="80"
                />
                <p class="product__title">School Bus</p>
                <div class="product__sale">
                  <span class="product__sale--old">$150</span>
                  <span class="product__sale--percent">-8%</span>
                </div>
                <div class="product__info">
                  <span class="product__price">$145</span>
                  <button class="product__cart">
                    <img src={shoppingCart} alt="shopping cart" height="20" />
                  </button>
                </div>
              </div>
              <div data-id="18" class="product">
                <img src={suv} class="product__img" alt="Suv" height="80" />
                <p class="product__title">Suv</p>
                <div class="product__sale">
                  <span class="product__sale--old">$300</span>
                  <span class="product__sale--percent">-13%</span>
                </div>
                <div class="product__info">
                  <span class="product__price">$296</span>
                  <button class="product__cart">
                    <img src={shoppingCart} alt="shopping cart" height="20" />
                  </button>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </main>
    </Fragment>
  ) : null;
}

export default Main;
