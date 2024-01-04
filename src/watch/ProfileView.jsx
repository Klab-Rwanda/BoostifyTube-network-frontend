import React, { useState } from "react";
import { MyContext } from "../context/Context";
import "./ProfileView.css";
import Activation from "../Dashboards/Activation";

const Profileview = () => {
  const { loggedUser } = MyContext();

  const [user, setUser] = useState({
    firstName: `${loggedUser?.user.FullName}`,
    lastName: `${loggedUser?.user.FullName}`,
    email: `${loggedUser?.user.Email}`,
    accountStatus: `${loggedUser?.user.accountStatus}`,
    role: `${loggedUser?.user.role}`,
    PaymentMethod: `${loggedUser?.user.PaymentMethod}`,
    Gender: ` ${loggedUser?.user.Gender}`,
    Country: `${loggedUser?.user.Country}`,
  });

  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

    const [isActivationModalOpen, setActivationModalOpen] = useState(false);

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
    <div className="profile-contents">
      {isActivationModalOpen && (
        <div className="overlay">
          <div className="activation-modal">
            <Activation onClose={() => setActivationModalOpen(false)} />
          </div>
        </div>
      )}
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
                  style={{ color: "#1919" }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="info-column">
          <div className="user-informp">
            <div className="field">
              <span className="label" style={{ color: "#191943" }}>
                First Name:
              </span>
              {editMode ? (
                <input
                  type="text"
                  value={editedUser.firstName}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, firstName: e.target.value })
                  }
                />
              ) : (
                <span style={{ color: "#191943" }}>{user.firstName}</span>
              )}
            </div>
            <div className="field">
              <span className="label" style={{ color: "#191943" }}>
                Last Name:
              </span>
              {editMode ? (
                <input
                  type="text"
                  value={editedUser.lastName}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, lastName: e.target.value })
                  }
                />
              ) : (
                <span style={{ color: "#191943" }}>{user.lastName}</span>
              )}
            </div>
            <div className="field">
              <span className="label" style={{ color: "#191943" }}>
                Email:
              </span>
              {editMode ? (
                <input
                  type="email"
                  value={editedUser.email}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, email: e.target.value })
                  }
                />
              ) : (
                <span style={{ color: "#191943" }}>{user.email}</span>
              )}
            </div>

            <div className="field">
              <span className="label" style={{ color: "#191943" }}>
                Country:
              </span>
              {editMode ? (
                <input
                  type="email"
                  value={editedUser.Country}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, Country: e.target.value })
                  }
                />
              ) : (
                <span style={{ color: "#191943" }}>{user.Country}</span>
              )}
            </div>

            <div className="field">
              <span className="label" style={{ color: "#191943" }}>
                Gender:
              </span>
              {editMode ? (
                <input
                  type="email"
                  value={editedUser.Gender}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, Gender: e.target.value })
                  }
                />
              ) : (
                <span style={{ color: "#191943" }}>{user.Gender}</span>
              )}
            </div>

            <div className="field">
              <span className="label" style={{ color: "#191943" }}>
                PaymentMethod:
              </span>
              {editMode ? (
                <input
                  type="email"
                  value={editedUser.PaymentMethod}
                  onChange={(e) =>
                    setEditedUser({
                      ...editedUser,
                      PaymentMethod: e.target.value,
                    })
                  }
                />
              ) : (
                <span style={{ color: "#191943" }}>{user.PaymentMethod}</span>
              )}
            </div>

            <div className="field">
              <span className="label" style={{ color: "#191943" }}>
                Role:
              </span>
              {editMode ? (
                <input
                  type="email"
                  value={editedUser.role}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, role: e.target.value })
                  }
                />
              ) : (
                <span style={{ color: "#191943" }}>{user.role}</span>
              )}
            </div>

            <div className="field">
              <span className="label" style={{ color: "#191943" }}>
                Account Status:
              </span>
              {editMode ? (
                <input
                  type="email"
                  value={editedUser.accountStatus}
                  onChange={(e) =>
                    setEditedUser({
                      ...editedUser,
                      accountStatus: e.target.value,
                    })
                  }
                />
              ) : (
                <span style={{ color: "#191943" }}>{user.accountStatus}</span>
              )}
            </div>
          </div>
          <div className="actions">
            {editMode ? (
              <>
                <button
                  className="button1"
                  onClick={handleUpdateProfile}
                  style={{ backgroundColor: "#191943" }}
                >
                  Save
                </button>
                <button
                  className="button1"
                  onClick={() => setEditMode(false)}
                  style={{ backgroundColor: "#191943" }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                style={{ backgroundColor: "#191943", color: "white" }}
              >
                Edit Profile
              </button>
            )}
          </div>
          <button
            className="activate1"
            onClick={() => setActivationModalOpen(true)}
          >
            Activate Account
          </button>
        </div>
      </div>
    </div>
  );
};
export default Profileview;
