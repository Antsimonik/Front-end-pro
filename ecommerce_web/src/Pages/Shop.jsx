import React, { Fragment } from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";

function Shop(props) {
  return (
    <Fragment>
      <Hero />
      <Popular />
      <Offers />
    </Fragment>
  );
}

export default Shop;
