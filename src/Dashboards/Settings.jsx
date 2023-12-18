import React, { useState } from "react";
import "../Styles/Settings.css";
import img from "../../public/images/avatarr.png";
import { MyContext } from "../context/Context";

const Settings = () => {
  const { loggedUser } = MyContext();
  console.log("=///////////", loggedUser);

  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default language: English
  const [isDarkMode, setDarkMode] = useState(false);
  const [isProfilePublic, setProfilePublic] = useState(true);
  const [showOnlineStatus, setShowOnlineStatus] = useState(true);
  const [receiveFriendRequests, setReceiveFriendRequests] = useState(true);
  const [isEditable, setEditable] = useState(false);
  const [name, setName] = useState(`${loggedUser?.user.FullName}`);
  const [email, setEmail] = useState(`${loggedUser?.user.Email}`);

  const handleEditClick = () => {
    setEditable(!isEditable);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);``
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleToggleProfile = () => {
    setProfilePublic((prev) => !prev);
  };

  const handleToggleOnlineStatus = () => {
    setShowOnlineStatus((prev) => !prev);
  };

  const handleToggleFriendRequests = () => {
    setReceiveFriendRequests((prev) => !prev);
  };

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };
  return (
    <div className="settings-cont">
      <div className="leftsetting">
        <div className="language">
          <h2 style={{ color: "#FEE000" }}>1. Language Settings</h2>
          <p>{selectedLanguage}</p>
          <div className="language-dropdown">
            <label htmlFor="languageSelect">Change Language:</label>
            <select
              style={{ color: "black" }}
              id="languageSelect"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <option style={{ color: "black" }} value="English">
                English
              </option>
              <option style={{ color: "black" }} value="fr">
                French
              </option>
              <option style={{ color: "black" }} value="kiny">
                Kinyarwanda
              </option>
              <option style={{ color: "black" }} value="Sw">
                Kiswahili
              </option>
            </select>
          </div>
        </div>
        <div className="general">
          <div
            className={`theme-toggle-container ${
              isDarkMode ? "dark" : "light"
            }`}
          >
            <h1 style={{ color: "#FEE000", fontSize: "1.5rem" }}>
              3. General Settings
            </h1>
            <div className="current-theme">
              Current Theme: {isDarkMode ? "Dark Mode" : "Light Mode"}
            </div>
            <div className="toggle-button" onClick={toggleTheme}>
              <div
                className={`inner-circle ${isDarkMode ? "dark" : "light"}`}
              ></div>
            </div>
          </div>
        </div>
        <div className="privacy">
          <div className="privacy-settings-container">
            <h1 style={{ color: "#FEE000", fontSize: "1.5rem" }}>
              5. Privacy Settings
            </h1>
            <div className="privacy-option">
              <label>Profile Visibility:</label>
              <div className="toggle-switch" onClick={handleToggleProfile}>
                <div
                  className={`inner-circle ${
                    isProfilePublic ? "public" : "private"
                  }`}
                ></div>
              </div>
              <p>{isProfilePublic ? "Public" : "Private"}</p>
            </div>

            <div className="privacy-option">
              <label>Show Online Status:</label>
              <div className="toggle-switch" onClick={handleToggleOnlineStatus}>
                <div
                  className={`inner-circle ${
                    showOnlineStatus ? "public" : "private"
                  }`}
                ></div>
              </div>
              <p>{showOnlineStatus ? "Yes" : "No"}</p>
            </div>
          </div>
        </div>
        <div className="logout"></div>
      </div>
      <div className="rightsetting">
        <div className="profilesetting">
          <h1
            style={{
              color: "#FEE000",
              fontSize: "1.5rem",
              textAlign: "start",
              alignItems: "start",
              fontWeight: "lighter",
            }}
          >
            2. Profile setting
          </h1>
          <div className="profile-settings-container">
            <div className="info-section">
              <div className="input-container">
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  readOnly={!isEditable}
                />
                <input
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  readOnly={!isEditable}
                />
                {isEditable && (
                  <button className="edit-icon" onClick={handleEditClick}>
                    Update
                  </button>
                )}
              </div>
              {!isEditable && (
                <button className="edit-icon" onClick={handleEditClick}>
                  Edit
                </button>
              )}
            </div>

            <div className="picture-section">
              <img
                src={loggedUser?.user.image}
                alt="Current Profile"
                style={{ width: "50%", height: "90%" }}
              />
              <button className="edit-iconn">Upload</button>
            </div>
          </div>
        </div>
        <div className="paymentsetting"></div>
        <div className="notifications"></div>
      </div>
    </div>
  );
};

export default Settings;
