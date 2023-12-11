import React, { useState } from "react";
import "../Styles/Videos.css";
import { MyContext } from "../context/Context";
import { Link } from "react-router-dom";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

const Videos = () => {
  const { videos } = MyContext();
  const [filter, setFilter] = useState("all");

  const filteredVideos = videos.filter((video) => {
    if (filter === "all") {
      return true;
    } else if (filter === "ready") {
      return video.status === "ready";
    } else if (filter === "pending") {
      return video.status === "pending";
    }
  });

  return (
    <div className="video-cont">
      <div className="filter-buttons">
        <button className="btnfilter" onClick={() => setFilter("all")}>
          All Videos
        </button>
        <button className="btnfilter" onClick={() => setFilter("ready")}>
          Ready Videos
        </button>
        <button className="btnfilter" onClick={() => setFilter("pending")}>
          Pending Videos
        </button>
      </div>
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
              style={{ width: "100%", border: "none" }}
            ></iframe>
            <Link to={`/dashboard/video/${video.id}`} className="view-title">
              <p style={{ padding: "1rem .5rem" }}>{video.snippet.title}</p>
            </Link>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
              }}
            >
              <p>
                <MdOutlineRemoveRedEye />: {video.statistics.viewCount}
              </p>
              <p>
                <AiOutlineLike />: {video.statistics.likeCount}
              </p>
              <p>
                <FaRegComment />: {video.statistics.commentCount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
