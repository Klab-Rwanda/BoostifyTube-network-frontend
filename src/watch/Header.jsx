import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import "../watch/Header.css";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import SideBar from "../youtuber-Dash/youtuber components/SideBar";
import Sidebar from "./Sidebar";
import Esearch from "./Esearch";

function Header() {
  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "/";
  };
  const [modal, setModal] = useState();
  function openModal() {
    setModal(!modal);
  }
  // const { videos}= MyContext();
  // const[search,setSearch]= useState();

  // const filterproduct = videos.filter(item =>
  //   Object.values(item).some(value =>
  //     value.toLowerCase().includes(search.toLowerCase())
  //   )
  // );

  return (
    <div className=" header-textt">
      {modal && <Esearch openModal={openModal} />}
      <FaBars onClick={openModal} className="header-search" />
      <div className=" header-text1">
        <div className="watch-user-logo">
          <b>O </b>
          <b className="watch-g">G</b>
        </div>
        <p>$1000</p>
      </div>

      <div className=" header-text2">
        <IoMdNotificationsOutline className="dash-heard" />
        <button
          className="header-button"
          style={{ border: "none" }}
          onClick={handleLogout}
        >
          {" "}
          Logout
        </button>
      </div>
    </div>
  );
}
export default Header;
