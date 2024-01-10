import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import "../youtStyles/menuBarStyle.css";
import { MyContext } from "../../context/Context";
function MenuBar() {
  const{loggedUser}= MyContext();
  const profileName = loggedUser?.user?.FullName.slice(0, 15);
  // console.log("loged user", profileName);
  return (
    <>
      <div className="topContainer">
        <div className="inputBox">
          <input
            type="text"
            placeholder="Search items, collections"
            style={{ height: "40px" }}
          />
          <i>
            <BiSearchAlt style={{ color: "black" }} />
          </i>
        </div>
        <div className="profileContainer">
          <i className="profileIcon">
            <FaBell />
          </i>

          <div className="profileImage">
            <img src="isaac.jpg" alt="" />
          </div>
          <p className="profileName">{profileName}</p>
          <i className="menuChevron" id="menuChevron">
            <FaChevronDown />
          </i>

          {/* <div className="menuContainer" id="menuContainer">
            <ul>
              <li>Web design</li>
              <li>UI / UX</li>
              <li>Form Design</li>
              <li>UI design</li>
            </ul>
          </div>   */}
        </div>
      </div>
    </>
  );
}

export default MenuBar;
