import React from "react";
import NavBars from "./NavBars";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
  return (
    <div>
      <NavBars />
      <div
        className="content"
        style={{ color: "red", marginLeft: "15.5%", marginTop: "-33.2rem" }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashLayout;
