import React from "react";
import "../youtStyles/FirstPage.css";
import Banner from "../img/1.jpg";
// import CardMain from "./CardMain";
import Card1 from "../img/card1.jpg";
import Card2 from "../img/card2.jpg";
import Card3 from "../img/card3.jpg";
import Card4 from "../img/card4.jpg";
import Card5 from "../img/card5.jpg";
import Card6 from "../img/card6.jpg";
import DashCards from "./DashCards";
import { FaDelicious, FaShoppingCart, FaEye, FaBell } from "react-icons/fa";
import { MdOutlineThumbUpAlt } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import YouTube from "react-youtube";

import { Bar } from "react-chartjs-2";
import CardMain from "./CardMain";
import { MyContext } from "../../context/Context";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const VideoCard = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);
    const API_KEY = "AIzaSyCLyB5T0faW7qGwhnq07DJCeSA4I5RXJ_M"; // Replace with your actual API key

    useEffect(() => {
      const fetchVideoData = async () => {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
          );
          setVideoData(response.data.items[0]);
          // console.log(" rere..", response.data.items[0].snippet.channelTitle);
        } catch (error) {
          console.error("Error fetching video data:", error);
        }
      };

      fetchVideoData();
    }, [videoId, API_KEY]);

    if (!videoData) {
      return <div>Loading...</div>;
    }
    // console.log("revvvv",videoData);

    const opts = {
      height: "200",
      width: "300",
      playerVars: {
        autoplay: 0,
      },
    };

    return (
      <div className="youtuber-singdle-video-cardss">
        <div className="youtuber-single-video-card">
          <YouTube videoId={videoId} opts={opts} />
          <p id="detail-title">{videoData.snippet.localized.title.slice(0,50)}</p>
          <p id="detail">Views: {videoData.statistics.viewCount}</p>
          <p id="detail">Likes: {videoData.statistics.likeCount}</p>
          <p id="detail">Comments: {videoData.statistics.commentCount}</p>
          <p id="detail">Channel: {videoData.snippet.channelTitle}</p>
        </div>
      </div>
    );
  };
function FirstPage() {
  const {
   videoIdPerOwner,
  
  } = MyContext();
  return (
    <div className="initialDashPage">
      <div>
        <h1>Welcome to Your Dashboard</h1>
       
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
        {/* {uploadedVideos.map((uplVideo) => {
          <CardMain imgSrc={Card4} title={uplVideo.title} hearts={"65"} />;
        })} */}
        {videoIdPerOwner.map((videoId, index) => (
          <VideoCard
            key={index}
            videoId={videoId}
            title={`Video ${index + 1}`}
            className="youtuber-single-video-card"
          ></VideoCard>
        ))}
      </div>
    </div>
  );
}

export default FirstPage;
