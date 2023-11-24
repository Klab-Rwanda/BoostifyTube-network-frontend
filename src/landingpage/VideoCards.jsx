import React from "react";
import "../Styles/VideoCards.css"; // Corrected import statement

const videos = [
  {
    videoId: "idYUy3hf3D0",
    title: "Video Title 1",
    views: 1000,
    channel: "Channel 1",
    likes: 50,
    comments: 10,
  },
  {
    videoId: "idYUy3hf3D0",
    title: "Video Title 2",
    views: 2000,
    channel: "Channel 2",
    likes: 75,
    comments: 15,
  },
  {
    videoId: "idYUy3hf3D0",
    title: "Video Title 2",
    views: 2000,
    channel: "Channel 2",
    likes: 75,
    comments: 15,
  },
  {
    videoId: "idYUy3hf3D0",
    title: "Video Title 2",
    views: 2000,
    channel: "Channel 2",
    likes: 75,
    comments: 15,
  },
  {
    videoId: "idYUy3hf3D0",
    title: "Video Title 2",
    views: 2000,
    channel: "Channel 2",
    likes: 75,
    comments: 15,
  },
  {
    videoId: "idYUy3hf3D0",
    title: "Video Title 2",
    views: 2000,
    channel: "Channel 2",
    likes: 75,
    comments: 15,
  },
];

const VideoCard = ({ video }) => {
  if (
    !video ||
    !video.title ||
    !video.videoId ||
    !video.views ||
    !video.channel ||
    !video.likes ||
    !video.comments
  ) {
    return <div>Error: Invalid video data</div>;
  }

  return (
    <div className="video-card">
      <iframe
        title={video.title}
        width="300"
        height="200"
        src={`https://www.youtube.com/embed/${video.videoId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="video-details">
        <h3>{video.title}</h3>
        <p className="views">Views: {video.views}</p>
        <p className="channel">Channel: {video.channel}</p>
        <p className="likes">Likes: {video.likes}</p>
        <p className="comments">Comments: {video.comments}</p>
      </div>
    </div>
  );
};

const VideoCards = () => {
  return (
    <div className="video-cards-container">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};

export default VideoCards;
