import React, { Fragment } from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

function Shop(props) {
  return (
    <Fragment>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </Fragment>
  );
}

export default Shop;
