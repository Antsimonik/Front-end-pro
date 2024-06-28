import React, { Fragment } from "react";
import Header from "../components/Sections/Account/Header/Header";
import Container from "../components/Sections/Account/Container/Container";
import "../css/_account.sass";

function Account(props) {
  return (
    <Fragment>
      <Header />
      <Container />
    </Fragment>
  );
}

export default Account;
