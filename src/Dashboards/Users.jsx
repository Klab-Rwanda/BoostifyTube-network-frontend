import React, { useState } from "react";
import "../Styles/Users.css";
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MyContext } from "../context/Context";
import ReactPaginate from "react-paginate";

const Users = () => {




  let token = localStorage.getItem("token");
  const { fetchUsersData=[] } = MyContext();

  // console.log("UUUUUUUUUUUUUUU", fetchUsersData);

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
              <td className="actions">
                <FaEdit />
                <RiDeleteBin6Line style={{ color: "red" }} />
              </td>
            </tr>
          ))}
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
