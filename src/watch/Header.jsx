
import "../watch/Header.css";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { MyContext } from "../context/Context";
import ActivationModal from "./ActivationModal";

function Header() {
  const { loggedUser } = MyContext();
  const [isActivationModalOpen, setIsActivationModalOpen] = useState(false);
  const [modal, setModal] = useState(false);

  console.log("Responseeeeeeeeeeeeeeeee", loggedUser?.user?.accountStatus);

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "/";
  };

  function openModal() {
    setModal(!modal);
  }

  const openActivationModal = () => {
    setIsActivationModalOpen(true);
  };


   const closeActivationModal = () => {
     setIsActivationModalOpen(false);
   };

  return (
    <div className="header-wraper">
      <div>
        {loggedUser?.user?.accountStatus !== "activated" && (
          <div className="activation-reminder">
            Please activate your account.
            <button
              style={{
                border: "none",
                backgroundColor: "#fee60c",
                marginLeft: ".5rem",
              }}
              onClick={openActivationModal}
            >
              Activate Now to start earning money
            </button>
          </div>
        )}

        <div className="header-textt">
          {modal && <Esearch openModal={openModal} />}
          <FaBars onClick={openModal} className="header-search" />
          <div className="header-text1">
            <div className="watch-user-logo">
              <b>B </b>
              <b className="watch-g">TNet</b>
            </div>
            <p>$1000</p>
          </div>

          <div className="header-text2">
            <button
              className="header-button"
              style={{ border: "none" }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {isActivationModalOpen && (
        <ActivationModal onClose={closeActivationModal} />
      )}
    </div>
  );
}

export default Header;

