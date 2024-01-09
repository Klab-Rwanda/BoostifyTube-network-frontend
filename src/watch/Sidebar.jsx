import { CgProfile } from "react-icons/cg";
import { IoLogoYoutube } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import "../watch/Sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "/";
  };
  return (
    <div className=" sidebre">
      <div className="sidebar1">
        <Link to="home" className="sidebar-text" style={{ marginTop: ".5rem" }}>
          <IoMdHome className="sidebar-icon" />
          <p id="sidelink">Home</p>
        </Link>
        <Link to="video" className="sidebar-text">
          <IoLogoYoutube className="sidebar-icon" />

          <p id="sidelink"> Videos</p>
        </Link>
        <Link to="balance" className="sidebar-text">
          <GiMoneyStack className="sidebar-icon" />
          <p id="sidelink"> Balance</p>
        </Link>
      </div>
      <div className="setting-sidebar">
        <Link className="sidebar-text" to="usersettings">
          <CgProfile className="sidebar-icon" />
          <p id="sidelink">Profile </p>
        </Link>
        <Link to="setting" className="sidebar-text">
          <IoMdSettings className="sidebar-icon" />
          <p id="sidelink"> Setting</p>
        </Link>
        <Link className="sidebar-text">
          <CiLogout className="sidebar-icon" />
          <p onClick={handleLogout} id="sidelink">
            {" "}
            Logout
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
