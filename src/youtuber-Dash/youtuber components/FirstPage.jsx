import React from 'react'
import "../youtStyles/FirstPage.css"
import Banner from "../img/1.jpg";
// import CardMain from "./CardMain";
import Card1 from "../img/card1.jpg";
import Card2 from "../img/card2.jpg";
import Card3 from "../img/card3.jpg";
import Card4 from "../img/card4.jpg";
import Card5 from "../img/card5.jpg";
import Card6 from "../img/card6.jpg";
import DashCards from './DashCards'
import { FaDelicious, FaShoppingCart, FaEye ,FaBell} from "react-icons/fa";
import {MdOutlineThumbUpAlt } from "react-icons/md"
import {FiMessageCircle } from "react-icons/fi"
import { Bar } from "react-chartjs-2";
import CardMain from './CardMain';

// const chartData = {
//   labels: ["Video 1", "Video 2", "Video 3", "Video 4", "Video 5"],
//   datasets: [
//     {
//       label: "Views",
//       backgroundColor: "#007bff",
//       borderColor: "#007bff",
//       borderWidth: 1,
//       hoverBackgroundColor: "#0056b3",
//       hoverBorderColor: "#0056b3",
//       data: [100000, 150000, 120000, 180000, 200000],
//     },
//   ],
// };

const videoData = [
  { title: "Video 1", views: 100000, likes: 10000, comments: 1000 },
  { title: "Video 2", views: 150000, likes: 15000, comments: 1500 },
  { title: "Video 3", views: 120000, likes: 12000, comments: 1200 },
  { title: "Video 4", views: 180000, likes: 18000, comments: 1800 },
  { title: "Video 1", views: 100000, likes: 10000, comments: 1000 },
  { title: "Video 2", views: 150000, likes: 15000, comments: 1500 },
  { title: "Video 3", views: 120000, likes: 12000, comments: 1200 },
  { title: "Video 5", views: 200000, likes: 20000, comments: 2000 },
];
function FirstPage() {
  return (
    <div className="initialDashPage">
      <div>
        <h1>Welcome to Your Dashboard</h1>
        <p>Explore your channel's performance and engage with your audience.</p>
      </div>
      <div className="dash-highlight">
        <DashCards num={"70K"} icon={<FaEye />} title={"Viewer"} style="backgroundColor:black"/>
        <DashCards num={"70K"} icon={<FaBell />} title={"Sub"} />
        <DashCards num={"70K"} icon={<MdOutlineThumbUpAlt />} title={"Likes"} />
        <DashCards num={"70K"} icon={<FiMessageCircle />} title={"Comment"} />
      </div>

      

     
      <div>
        <h1 >My Uploaded Videos</h1>
      </div>
      <div className="youtuber-video-card">
        {/* <CardMain title={"Cubic Thunder"} hearts={"65"} /> */}
        <CardMain imgSrc={Card2} title={"Pokemon Ball"} hearts={"65"} />
        <CardMain imgSrc={Card3} title={"Pyramid God"} hearts={"65"} />
        <CardMain imgSrc={Card4} title={"Stunning Cube"} hearts={"65"} />
        <CardMain imgSrc={Card5} title={"Start Crystal"} hearts={"65"} />
        <CardMain imgSrc={Card6} title={"Crystal Bird"} hearts={"65"} />
        <CardMain imgSrc={Card5} title={"Start Crystal"} hearts={"65"} />
        <CardMain imgSrc={Card2} title={"Pokemon Ball"} hearts={"65"} />
        <CardMain imgSrc={Card3} title={"Pyramid God"} hearts={"65"} />
        <CardMain imgSrc={Card4} title={"Stunning Cube"} hearts={"65"} />

        <CardMain imgSrc={Card6} title={"Crystal Bird"} hearts={"65"} />
      </div>
    </div>
  );
}

export default FirstPage