import React from "react";
import "../Styles/Users.css";
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Users = () => {
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
          <tr>
            <td>1</td>
            <td>Yvette IZANYIBUKA</td>
            <td>Youtuber</td>
            <td className="actions">
              <FaEdit />
              <RiDeleteBin6Line style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Vincent KUBWIMANA</td>
            <td>Viewer</td>
            <td className="actions">
              <FaEdit />
              <RiDeleteBin6Line style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Isaac KAGENZA</td>
            <td>Admin</td>
            <td className="actions">
              <FaEdit />
              <RiDeleteBin6Line style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Isaac KAGENZA</td>
            <td>Admin</td>
            <td className="actions">
              <FaEdit />
              <RiDeleteBin6Line style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Isaac KAGENZA</td>
            <td>Admin</td>
            <td className="actions">
              <FaEdit />
              <RiDeleteBin6Line style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Isaac KAGENZA</td>
            <td>Admin</td>
            <td className="actions">
              <FaEdit />
              <RiDeleteBin6Line style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Isaac KAGENZA</td>
            <td>Admin</td>
            <td className="actions">
              <FaEdit />
              <RiDeleteBin6Line style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Isaac KAGENZA</td>
            <td>Admin</td>
            <td className="actions">
              <FaEdit />
              <RiDeleteBin6Line style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Isaac KAGENZA</td>
            <td>Admin</td>
            <td className="actions">
              <FaEdit />
              <RiDeleteBin6Line style={{ color: "red" }} />
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Isaac KAGENZA</td>
            <td>Admin</td>
            <td className="actions">
              <FaEdit />
              <RiDeleteBin6Line style={{ color: "red" }} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
