import React from "react";
import "../Styles/DashHome.css";
import { Bar, Line, PolarArea } from "react-chartjs-2";
import "chart.js/auto";

const DashHome = () => {
  const userGrowthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "User Growth",
        data: [100, 150, 200, 250, 300],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
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
        borderColor: "rgba(255,99,132,1)",
      },
    ],
  };

  const incomeExpenseData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Income",
        data: [2000, 2500, 3000, 3500, 4000],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: [1500, 2000, 1800, 2200, 2500],
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
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
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
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
          <h1>50</h1>
          <p>Users</p>
        </div>
        <div className="videoscount">
          <h1>20</h1>
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
          <Line key="userGrowthChart" data={userGrowthData} />
        </div>
        <div className="videossss">
          <Line key="videoGrowthChart" data={videoGrowthData} />
        </div>
        <div className="income">
          <Bar key="incomeExpenseChart" data={incomeExpenseData} />
        </div>
        <div className="ratings">
          <PolarArea key="ratingsChart" data={ratingsData} />
        </div>
      </div>
    </div>
  );
};

export default DashHome;
