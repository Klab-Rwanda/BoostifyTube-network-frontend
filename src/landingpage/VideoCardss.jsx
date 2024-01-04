import React, { useState, useEffect } from "react";
import "../Styles/videoCardss.css";
import { MyContext } from "../context/Context";

const VideoCard = ({ videos }) => {

  if (!videos || videos.length === 0) {
    return <div>Loading...</div>;
  }
  console.log("geetting ",videos);
  return (
    <div className="video-details">
      {videos.map((video, index) => (
        <div key={index} className="video-item">
          <iframe
            title={video.snippet.title}
            width="300"
            height="200"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p id="det">{video.snippet.title}</p>
          <p id="det">Views: {video.statistics.viewCount}</p>
          <p id="det">Likes: {video.statistics.likeCount}</p>
          <p id="det">Comments: {video.statistics.commentCount}</p>
        </div>
      ))}
    </div>
  );
};

const VideoCards = () => {
   const { videos } = MyContext();

  return (
    <div className="video-cards-container">
      <VideoCard videos={videos} />
    </div>
  );
};

export default VideoCards;
