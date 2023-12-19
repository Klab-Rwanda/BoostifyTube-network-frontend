import React, { useState } from "react";
import "../Styles/Profile.css";
import { MyContext } from "../context/Context";

const Profile = () => {
  const {loggedUser} = MyContext();

  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  });

  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const [profilePicture, setProfilePicture] = useState(
    "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
  );

  const handleUpdateProfile = () => {
    setUser({ ...editedUser });
    setEditMode(false);
  };

  const handleUpdateProfilePicture = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-cont">
      <div className="user-profile">
        <div className="profile-column">
          <div className="profile-picture">
            <img src={profilePicture} alt="Profile" />
            {editMode && (
              <div className="file-input">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUpdateProfilePicture}
                />
              </div>
            )}
          </div>
        </div>
        <div className="info-column">
          <div className="user-info">
            <div className="field">
              <span className="label">First Name:</span>
              {editMode ? (
                <input
                  type="text"
                  value={editedUser.firstName}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, firstName: e.target.value })
                  }
                />
              ) : (
                <span>{user.firstName}</span>
              )}
            </div>
            <div className="field">
              <span className="label">Last Name:</span>
              {editMode ? (
                <input
                  type="text"
                  value={editedUser.lastName}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, lastName: e.target.value })
                  }
                />
              ) : (
                <span>{user.lastName}</span>
              )}
            </div>
            <div className="field">
              <span className="label">Email:</span>
              {editMode ? (
                <input
                  type="email"
                  value={editedUser.email}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, email: e.target.value })
                  }
                />
              ) : (
                <span>{user.email}</span>
              )}
            </div>
          </div>
          <div className="actions">
            {editMode ? (
              <>
                <button className="button1" onClick={handleUpdateProfile}>
                  Save
                </button>
                <button className="button1" onClick={() => setEditMode(false)}>
                  Cancel
                </button>
              </>
            ) : (
              <button onClick={() => setEditMode(true)}>Edit Profile</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
