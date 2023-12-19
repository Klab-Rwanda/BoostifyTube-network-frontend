import React, { useState, useEffect } from "react";
import "../Styles/DashContact.css";
import { MyContext } from "../context/Context";
import ReactPaginate from "react-paginate";

const DashContact = () => {
  const { Messages, messageLoading } = MyContext();
  console.log("======", Messages);
  let i = 0;

  const [pagenumber, setPagenumber] = useState(0);
  const videopage = 6;
  const pagevisited = pagenumber * videopage;
  const displaycontact = Messages?.slice(pagevisited, pagevisited + videopage);

  const changepage = ({ selected }) => {
    setPagenumber(selected);
  };

  return (
    <div className="contact-table-container">
      {/* <input type="text" placeholder="Search" className="searchh" /> */}
      <h3 style={{ color: "#191943" }}>Received Messages</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Names</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displaycontact?.map((message, index) => (
            <tr>
              <td>{(i += 1)}</td>
              <td>{message.Name}</td>
              <td>{message.Email}</td>
              <td>{message.Message}</td>
              <td className="contact-button">
                <button className="contBtns">Reply</button>
                <button className="contBtns">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        className="pages1"
        pageCount={Math.ceil(Messages?.length / videopage)}
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

export default DashContact;
