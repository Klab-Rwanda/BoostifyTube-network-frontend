
import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import "./Video.css";
import { MyContext } from "../context/Context";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const Video = ({ videoId }) => {
  const [videoInfo, setVideoInfo] = useState(null);
  const API_KEY = "AIzaSyCLyB5T0faW7qGwhnq07DJCeSA4I5RXJ_M";

  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
        );
        setVideoInfo(response.data.items[0]);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoInfo();
  }, [videoId, API_KEY]);

  if (!videoInfo) {
    return <div>Loading...</div>;
  }

  const opts = {
  
    height: "200",
     width: "300",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>
      <div>
        <YouTube videoId={videoId} opts={opts} />

        <Link to={`/dashboard/Videocardss/${videoInfo.id}`} className="view-title">
          <p id="det">{videoInfo.snippet.localized.title}</p>
        </Link>
        <p id="det">
          <MdOutlineRemoveRedEye />
          {videoInfo.statistics.viewCount}
        </p>
        <p id="det">
          <AiOutlineLike /> {videoInfo.statistics.likeCount}
        </p>
        <p id="det">
          <FaRegComment /> {videoInfo.statistics.commentCount}
        </p>
        <p id="det">Channel: {videoInfo.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

const Videocardss = () => {
  const { uploadedVideos } = MyContext();
  const videoLinks = uploadedVideos
    .map((video) => video?.linkOfVideo)
    .filter(Boolean);

  const getYouTubeVideoId = (url) => {
    const regex =
      /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoIdss = videoLinks
    .map((link) => getYouTubeVideoId(link))
    .filter(Boolean);

  return (
    <div className="videeos">
      {videoIdss.map((videoId, index) => (
        <Video key={index} videoId={videoId} />
      ))}
    </div>
  );
};

export default Videocardss;