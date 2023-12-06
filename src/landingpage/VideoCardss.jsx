import React, { useState, useEffect } from "react";
import "../Styles/videoCardss.css";

const VideoCard = ({ videos }) => {
  if (!videos || videos.length === 0) {
    return <div>Loading...</div>;
  }
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
          <p>{video.snippet.title}</p>
          <p>Views: {video.statistics.viewCount}</p>
          <p>Likes: {video.statistics.likeCount}</p>
          <p>Comments: {video.statistics.commentCount}</p>
        </div>
      ))}
    </div>
  );
};

const VideoCards = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoIds = [
          "ezF4dG7__Ns",
          "FHV7vTGBAM4",
          "bfmOaw7JSGQ",
          "5H3YUrjbRzc",
          "HPnekgJ018s",
          "TrmFCnv3CjA",
          "sMjnwSk98as",
          "sMjnwSk98as",
        ];

        if (!videoIds || videoIds.length === 0) {
          console.error("No video IDs provided.");
          return;
        }

        const videoIdsParam = videoIds.join(",");
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIdsParam}&key=AIzaSyDBwaf4NcPBZ5lpW1Qr9kTg84Dqa9Dsazc
`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }

        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setVideos(data.items);
        } else {
          console.error("No videos found in the API response.");
        }
      } catch (error) {
        console.error("Error fetching videos:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="video-cards-container">
      <VideoCard videos={videos} />
    </div>
  );
};

export default VideoCards;
