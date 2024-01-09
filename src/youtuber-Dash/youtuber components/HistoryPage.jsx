import React, { useState } from "react";
import "../youtStyles/historyStyle.css";
import { MyContext } from "../../context/Context";

function HistoryPage() {
  const historyData = [
    { number: 1, date: "2023-12-15", video: "an in love", cost: 100 },
    { number: 2, date: "2023-12-18", video: "Rahira", cost: 150 },
    { number: 3, date: "2023-12-20", video: "Habibi", cost: 200 },
  ];
  // const [indexNo,setIndexNo]= useState("")
 

   const {
     
     youtuberHistory,
   } = MyContext();
    // console.log("youtube API video link hhhhhh", youtuberHistory?.transactions);
const mytransaction = youtuberHistory?.transactions;
  return (
    <>
      <div className="transactions-container" style={{ color: "red" }}>
        <h2 style={{ color: "black" }}>Transaction History</h2>
        <table className="history-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Date</th>
              <th>Status</th>
              <th>Cost Paid</th>
            </tr>
          </thead>
          <tbody>
            {mytransaction?.map((item, indexNo) => (
              <tr key={item.number}>
                <td>{indexNo + 1}</td>
                <td>{item.Date}</td>
                <td>{item.Status}</td>
                <td>{item.Amount}Frw</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default HistoryPage;
