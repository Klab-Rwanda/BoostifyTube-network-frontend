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
// import { mycontext } from "../components/context/ContextProvider";

import { Bar } from "react-chartjs-2";
import CardMain from './CardMain';
import { MyContext } from '../../context/Context';


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
  const { uploadedVideos =[] } = MyContext();
  console.log(uploadedVideos);
  return (
    <div className="initialDashPage">
      <div>
        <h1>Welcome to Your Dashboard</h1>
        <p>Explore your channel's performance and engage with your audience.</p>
      </div>
      <div className="dash-highlight">
        <DashCards
          num={"70K"}
          icon={<FaEye />}
          title={"Viewer"}
          style="backgroundColor:black"
        />

        <DashCards num={"10K"} icon={<FaBell />} title={"Sub"} />
        <DashCards
          num={"710K"}
          icon={<MdOutlineThumbUpAlt />}
          title={"Likes"}
        />
        <DashCards num={"30K"} icon={<FiMessageCircle />} title={"Comment"} />
      </div>

      <div>
        <h1>My Uploaded Videos</h1>
      </div>
      <div className="youtuber-video-card">
        {uploadedVideos.map((uplVideo)=>{<CardMain imgSrc={Card4} title={uplVideo.title} hearts={"65"} />;})}

        {/* <CardMain imgSrc={Card4} title={"Stunning Cube"} hearts={"65"} />
        <CardMain imgSrc={Card5} title={"Start Crystal"} hearts={"65"} />
       
        <CardMain imgSrc={Card6} title={"Crystal Bird"} hearts={"65"} />
        <CardMain imgSrc={Card5} title={"Start Crystal"} hearts={"65"} />
        <CardMain imgSrc={Card2} title={"Pokemon Ball"} hearts={"65"} />
        <CardMain imgSrc={Card3} title={"Pyramid God"} hearts={"65"} />
        <CardMain imgSrc={Card4} title={"Stunning Cube"} hearts={"65"} />

        <CardMain imgSrc={Card6} title={"Crystal Bird"} hearts={"65"} /> */}
      </div>
    </div>
  );
}

export default FirstPage