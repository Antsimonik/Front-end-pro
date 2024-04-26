import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoList from "./components/ToDo/ToDoList";
import Daschboard from "./pages/Daschboard";
import Account from "./pages/Account";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import "./css/_header.scss";

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Daschboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
