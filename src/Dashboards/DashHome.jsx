import React from "react";
import "../Styles/DashHome.css";
import { Bar, Line } from "react-chartjs-2";
import "chart.js/auto";
import { MyContext } from "../context/Context";

const DashHome = () => {
  const { fetchUsersData = [] } = MyContext();
  const { uploadedVideos = [] } = MyContext();
  console.log("sawaaaaaaaa", uploadedVideos);

  const userGrowthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "User Growth",
        data: [100, 150, 200, 250, 300],
        fill: false,
        borderColor: "#fee60c",
      },
    ],
  };

  const videoGrowthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Video Growth",
        data: [50, 75, 100, 125, 150],
        fill: false,
        borderColor: "#191943",
      },
    ],
  };

  const incomeExpenseData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Income",
        data: [2000, 2500, 3000, 3500, 4000],
        backgroundColor: "#191943",
        // borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: [1500, 2000, 1800, 2200, 2500],
        backgroundColor: "#fee60c",
        // borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
      },
    ],
  };

  const ratingsData = {
    labels: ["Features", "Usability", "Content", "Performance"],
    datasets: [
      {
        label: "Ratings",
        data: [4, 5, 3.5, 4.2],
        backgroundColor: ["lightGray", "#fee60c", "#191943", "white"],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashHome-cont">
      <div className="summary">
        <div className="userscount">
          <h1>{fetchUsersData?.length}</h1>
          <p>Users</p>
        </div>
        <div className="videoscount">
          <h1>{uploadedVideos?.length}</h1>
          <p>Videos</p>
        </div>
        <div className="incomesummary">
          <h1>$6000</h1>
          <p>Rwf</p>
        </div>
        <div className="expensessummary">
          <h1>$2500</h1>
          <p>Rwf</p>
        </div>
      </div>
      <div className="graphs">
        <div className="usersss">
          <Line
            key="userGrowthChart"
            data={userGrowthData}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="videossss">
          <Line
            key="videoGrowthChart"
            data={videoGrowthData}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="income">
          <Bar
            key="incomeExpenseChart"
            data={incomeExpenseData}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashHome;
