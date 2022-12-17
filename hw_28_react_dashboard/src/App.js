import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EditUser from "./pages/EditUser";
import CreateUser from "./pages/CreateUser";

import Container from "@mui/material/Container";

function App(props) {
  return (
    <Container maxWidth="lg">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/:userId"} element={<EditUser />} />
          <Route path={"/create"} element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
