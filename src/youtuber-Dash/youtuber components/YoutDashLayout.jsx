import React from "react";
import NavBars from "../../Dashboards/NavBars";
import { Outlet } from "react-router-dom";
import FirstPage from "./FirstPage";
import SideBar from "./SideBar";
import MenuBar from "./MenuBar";
import "../youtStyles/SideBarStyle.css"
function YoutDashLayout() {
  return (
    <>
      {/* <NavBars /> */}
      {/* <FirstPage /> */}
      <MenuBar />
      <SideBar />
      <div
        id="youtuber-outlet"
        style={{ color: "red", marginLeft: "221px", marginTop: "5.2rem",backgroundColor:"#fff", height:"100%", padding: "30px"}}
      >
        <Outlet />
      </div>
    </>
  );
}

export default YoutDashLayout;
