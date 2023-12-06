import React from "react";
import "../Styles/Videos.css";
import { MyContext } from "../context/Context";
import {Link} from "react-router-dom";

const Videos = () => {
  const { videos } = MyContext();
  return (
    <div className="video-cont">
      <div className="videeo">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <iframe
              title={video.snippet.title}
              width="300"
              height="200"
              src={`https://www.youtube.com/embed/${video.id}`}
              allowFullScreen
              className="allvideo-view"
            ></iframe>
            <Link to={`/dashboard/video/${video.id}`} className="view-title">
              <p>{video.snippet.title}</p>
            </Link>
            <p>Views: {video.statistics.viewCount}</p>
            <p>Likes: {video.statistics.likeCount}</p>
            <p>Comments: {video.statistics.commentCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
