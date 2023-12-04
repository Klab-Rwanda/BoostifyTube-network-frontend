import React from 'react'
import "../youtStyles/FirstPage.css"
import { FaDelicious, FaShoppingCart, FaEye } from "react-icons/fa";
function DashCards() {
  return (
    <>
      <div className="dash-card">
        <div className="num-icon">
          <h1>70K</h1>
          <i>
            <FaEye />
          </i>
        </div>
        <div className="dash-card-discription">
          <h4>Viewer</h4>
        </div>
      </div>
    </>
  );
}

export default DashCards;