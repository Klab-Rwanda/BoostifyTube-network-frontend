import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import "../Styles/Videos.css";
import { MyContext } from "../context/Context";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

import Skeleton from "react-loading-skeleton";

const VideoCard = ({ videoId }) => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "AIzaSyCLyB5T0faW7qGwhnq07DJCeSA4I5RXJ_M";

  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
        );
        setVideoInfo(response.data.items[0]);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoInfo();
  }, [videoId, API_KEY]);

  if (loading) {
    return (
      <div className="video-details" style={{ width: "30%" }}>
        <Skeleton height={200} width={300} />
        <Skeleton count={60} />
      </div>
    );
  }

  const opts = {
    height: "200",
    width: "300",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="video-details" style={{ width: "30%" }}>
      <div className="video-item2">
        <YouTube videoId={videoId} opts={opts} />

        <Link
          to={`/superdashboard/videos/${videoInfo.id}`}
          className="view-title"
        >
          <p id="det">{videoInfo.snippet.localized.title}</p>
        </Link>
        <div className="details1">
          <p id="det">{videoInfo.snippet.channelTitle}</p>
          <p id="det">
            <MdOutlineRemoveRedEye />
            {videoInfo.statistics.viewCount}
          </p>
          <p id="det">
            <AiOutlineLike />
            {videoInfo.statistics.likeCount}
          </p>
          <p id="det">
            <FaRegComment /> {videoInfo.statistics.commentCount}
          </p>
        </div>

      </div>
    </div>
  )
};

const Videos = () => {
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
    <div className="video-cards-container">
      {videoIdss.map((videoId, index) => (
        <VideoCard key={index} videoId={videoId} />
      ))}
    </div>
  );
};

const Videos = () => {
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
    <div className="video-cards-container1">
      {videoIdss.map((videoId, index) => (
        <VideoCard key={index} videoId={videoId} className="vidCard" />
      ))}
    </div>
  );
};

export default Videos;
