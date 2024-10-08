import React, { Fragment, useEffect, useState } from "react";
import "./ListProduct.scss";
import cross_icon from "../../assets/cross_icon.png";

function ListProduct(props) {
  const [allproducts, setAllproducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllproducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "applications/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };

  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="list-product-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="list-product-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <Fragment>
              <div
                key={index}
                className="list-product-format-main list-product-format"
              >
                <img
                  src={product.image}
                  alt=""
                  className="list-product-format-main-icon"
                />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  onClick={() => {
                    remove_product(product.id);
                  }}
                  src={cross_icon}
                  alt="cross_icon_img"
                  className="list-product-format-main-remove-icon"
                />
              </div>
              <hr />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default ListProduct;
