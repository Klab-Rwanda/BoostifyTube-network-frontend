import React from "react";
import '../Styles/DashHome.css';

const DashHome = () => {
  return (
    <div className="dashHome-cont"
    >
      <div className="summary">
        <div className="userscount"></div>
        <div className="readycount"></div>
        <div className="pendingcount"></div>
        <div className="incomesummary"></div>
        <div className="expensessummary"></div>
      </div>
      <div className="graphs"></div>
    </div>
  );
};

export default DashHome;
