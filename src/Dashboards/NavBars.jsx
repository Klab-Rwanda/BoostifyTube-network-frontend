import React from "react";
import "../Styles/SuperDashboard.css";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import profile from "../../public/images/profile.png";
import { IoMdHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const NavBars = () => {
  const upLinks = [
    {
      icon: <IoMdHome />,
      path: "/superdashboard",
      name: "Dashboard",
    },
    {
      icon: <FaUsers />,
      path: "users",
      name: "Users",
    },
    {
      icon: <IoLogoYoutube />,
      path: "videos",
      name: "Videos",
    },
    {
      icon: <GrTransaction />,
      path: "transactions",
      name: "Transactions",
    },

    {
      icon: <FaMoneyCheckDollar />,
      path: "earnings",
      name: "Earnings",
    },
  ];
  const downLinks = [
    {
      icon: <CgProfile />,
      path: "profile",
      name: "Profile",
    },
    {
      icon: <IoMdSettings />,
      path: "generalsetting",
      name: "Settings",
    },
  ];
  return (
    <div className="super-container">
      <div className="topNav">
        <h1 className="logo">
          O <p style={{ color: "#fee60c" }}>G</p>{" "}
        </h1>
        <IoMenu className="menu-icon" />

        <input type="text" placeholder="Search" className="search" />
        <div className="notification">
          <IoMdNotifications className="not-icon" />
          <HiOutlineMail className="not-icon" />
          <div className="pic">
            <img
              src={profile}
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
      <div className="sideNav">
        <div className="uplinks">
          {upLinks.map((link, index) => (
            <NavLink to={link.path} className="navLink">
              {link.icon}
              <p className="linkName">{link.name}</p>
            </NavLink>
          ))}
        </div>
        <div className="downlinks">
          {downLinks.map((link1, index) => (
            <NavLink to={link1.path} className="navLink1">
              {link1.icon}
              <p className="linkName">{link1.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBars;
