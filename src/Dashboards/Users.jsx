import React, { useState } from "react";
import "../Styles/Users.css";
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MyContext } from "../context/Context";
import ReactPaginate from "react-paginate";
import Notiflix from "notiflix";
import axios from "axios";

const Users = () => {
  let token = localStorage.getItem("token");
  const { fetchUsersData = [] } = MyContext();
  console.log("all users", fetchUsersData.data);

  const [pagenumber, setPagenumber] = useState(0);
  const videopage = 7;
  const pagevisited = pagenumber * videopage;
  const displayuser = fetchUsersData.slice(
    pagevisited,
    pagevisited + videopage
  );

  const changepage = ({ selected }) => {
    setPagenumber(selected);
  };

  const handleDeleteClick = async (id) => {
    console.log(token);
    try {
      Notiflix.Confirm.show(
        "Confirm",
        "Confirm delete User?",
        "Yes",
        "No",
        async () => {
          const res = await axios.delete(
            `https://boostifytube-network-api.onrender.com/api/v1/user/deleteOneUser/${id}`,
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );
          window.location.reload();
          const data = await res.data;
          toast.success(data.message);
        },
        () => {
          alert("If you say so...");
        },
        () => {
          alert("If you say so...");
        },
        {}
      );
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="users-cont">
      <div className="user-header">
        <h2 style={{ color: "#191943" }}>Registered users</h2>
        <button
          className="new-userBtn"
          style={{ padding: ".5rem", width: "10rem" }}
        >
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
          {displayuser.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user?.FullName}</td>
              <td>{user?.role}</td>
              <td className="actions">
                <FaEdit />
                <RiDeleteBin6Line
                  style={{ color: "red" }}
                  onClick={() => handleDeleteClick(user?._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>{" "}
      <br />
      <ReactPaginate className="pages"
        pageCount={Math.ceil(fetchUsersData?.length / videopage)}
        prevAriaLabel={"Prev"}
        nextLabel={"Next"}
        onPageChange={changepage}
        containerClassName="pagination"
        previousLinkClassName="prevBtn"
        nextLinkClassName="next"
        disabledClassName="disabled"
        activeClassName="paginationactve"
      ></ReactPaginate>
    </div>
  );
};

export default Users;
