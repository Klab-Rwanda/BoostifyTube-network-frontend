import React, { useState, useEffect } from "react";
import "../Styles/SingleVideo.css";
import { useParams } from "react-router-dom";

const SingleVideo = () => {
  const { videoId } = useParams();
  const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyDBwaf4NcPBZ5lpW1Qr9kTg84Dqa9Dsazc
`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch video info");
        }

        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setVideoInfo(data.items[0]);
        } else {
          console.error("No video found in the API response.");
        }
      } catch (error) {
        console.error("Error fetching video info:", error.message);
      }
    };

    fetchVideoInfo();
  }, [videoId]);

  if (!videoInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-video-container">
      <iframe
        title="Single Video"
        width="800"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <p style={{ color: "red" }}>{videoInfo.snippet.title}</p>
      <p style={{ color: "red" }}>Views: {videoInfo.statistics.viewCount}</p>
      <p style={{ color: "red" }}>Likes: {videoInfo.statistics.likeCount}</p>
      <p style={{ color: "red" }}>
        Comments: {videoInfo.statistics.commentCount}
      </p>
    </div>
  );
};

export default SingleVideo;
