import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src="" alt="" />
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
