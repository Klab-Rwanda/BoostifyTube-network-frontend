import React from "react";
import "../youtStyles/historyStyle.css";

function HistoryPage() {
  const historyData = [
    { number: 1, date: "2023-12-15", video: "an in love", cost: 100 },
    { number: 2, date: "2023-12-18", video: "Rahira", cost: 150 },
    { number: 3, date: "2023-12-20", video: "Habibi", cost: 200 },
  ];
  return (
    <div className="history-section" style={{ color: "red" }}>
      <table className="history-table">
        <thead>
          <tr>
            <th>Number</th>
            <th>Date</th>
            <th>Uploaded Video</th>
            <th>Cost Paid</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item) => (
            <tr key={item.number}>
              <td>{item.number}</td>
              <td>{item.date}</td>
              <td>{item.video}</td>
              <td>$ {item.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryPage;
