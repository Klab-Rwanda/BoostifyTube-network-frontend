import React from "react";
import "../youtStyles/SideBarStyle.css";
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
  FaHome,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function SideBar() {
  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "/";
  };
  return (
    <>
      {/* <div className="side"> */}
      <div className="youtuber-sideBar" id="">
        <div className="log">
          <h1>O</h1>
          <h1>
            <p style={{ color: "#fee60c" }}>G</p>
          </h1>
        </div>
        <div className="sideBarLinks">
          <ul>
            <li>
              <a href="#">
                <NavLink to="/youtuberDash/">
                  <FaHome />
                  Home
                </NavLink>
              </a>
            </li>
            <li>
              <a href="#">
                <NavLink to="/youtuberDash/upload">
                  <FaCloudUploadAlt />
                  Upload
                </NavLink>
              </a>
            </li>
            <li>
              <a href="#">
                <NavLink to="/youtuberDash/payment">
                  <FaWallet />
                  Payment
                </NavLink>
              </a>{" "}
            </li>
            <li>
              <a href="#">
                <NavLink to="/youtuberDash/history">
                  <FaRegClock />
                  History
                </NavLink>
              </a>{" "}
            </li>
          </ul>
        </div>
        <div className="sidebarBottomLinks">
          <ul>
            <li>
              <a href="#">
                <NavLink to={"/superdashboard/generalsetting"}>
                  <FaCog />
                  Settings
                </NavLink>
              </a>
            </li>
            <li>
              <a onClick={handleLogout}>
                <NavLink to={"/"}>
                  <FaSignOutAlt />
                  Logout
                </NavLink>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* </div>   */}
    </>
  );
}

export default SideBar;
