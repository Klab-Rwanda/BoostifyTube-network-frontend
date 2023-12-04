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
      <div id="youtuber-outlet">

      <Outlet/>
      </div>
    </>
  );
}

export default YoutDashLayout;
