import React from "react";
import "../Styles/Users.css";
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MyContext } from "../context/Context";

const Users = () => {
  let token = localStorage.getItem("token");
  const { fetchUsersData=[] } = MyContext();

  // console.log("UUUUUUUUUUUUUUU", fetchUsersData);

  return (
    <div className="users-cont">
      <div className="user-header">
        <h2>Registered users</h2>
        <button className="new-userBtn">
          <FaPlus className="plus" style={{ color: "red" }} />
          Add new user
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Names</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fetchUsersData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user?.FullName}</td>
              <td>{user?.role}</td>
              <td className="actions">
                <FaEdit />
                <RiDeleteBin6Line style={{ color: "red" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
