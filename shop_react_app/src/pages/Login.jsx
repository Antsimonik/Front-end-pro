import React, { Fragment } from "react";
import Header from "../components/Sections/Login/Header";
import Container from "../components/Sections/Login/Container";

import "../css/style.sass";

function Login(props) {
  return (
    <Fragment>
      <Header />
      <Container />
    </Fragment>
  );
}

export default Login;
