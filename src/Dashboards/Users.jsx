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
  const { fetchUsersData=[] } = MyContext();



  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const handleConfirmDelete = async(id) => {
    try {
 Notiflix.Confirm.show(
  'Confirm delete tour',
  'Do you agree with me?',
  'Yes',
  'No',
  async() => {
    const res = await axios.delete( `https://boostifytube-network-api.onrender.com/api/v1/user/deleteOneUser/${id}`, {
      headers: {
        Authorization:`Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    window.location.reload()
  },
  () => {
  alert('If you say so...');
  },
  {
  },
  );
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteClick = (user) => {
    setTourToDelete(user);
    handleConfirmDelete()
  };
  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };







  const [pagenumber,setPagenumber]=useState(0);
  const videopage=7;
  const pagevisited=pagenumber*videopage;
  const displayuser=fetchUsersData.slice(pagevisited,pagevisited+videopage);
  
  
  const changepage= ({selected})=>{
    setPagenumber(selected)
  }

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
          {displayuser.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user?.FullName}</td>
              <td>{user?.role}</td>
              <td className="actions"
                 >
                <FaEdit />
                <RiDeleteBin6Line style={{ color: "red" }}
                 onClick={() => handleConfirmDelete(user._id)} />
              </td>
            </tr>
          ))}

{showDeleteConfirm && (
        <div className="popup">
          <p>Are you sure you want to delete {userToDelete._id}?</p>
          <button onClick={handleDeleteClick}>OK</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      )}

        </tbody>
      </table>
      <ReactPaginate
    pageCount={Math.ceil(fetchUsersData?.length  / videopage)}
    prevAriaLabel={"Prev"}
    nextLabel={"Next"}
    onPageChange={changepage}
    containerClassName='pagination'
    previousLinkClassName='prevBtn'
    nextLinkClassName='next'
    disabledClassName='disabled'
    activeClassName='paginationactve'
    >

    </ReactPaginate>

    </div>
  );
};

export default Users;
