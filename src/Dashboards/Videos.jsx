import React, { useState } from "react";
import "../Styles/Videos.css";
import { MyContext } from "../context/Context";
import { Link } from "react-router-dom";
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
    <div className="video-contt">
      <div className="filter-buttons">
        <button className="btnfilter" onClick={() => setFilter("all")}>
          All Videos
        </button>
        <button className="btnfilter" onClick={() => setFilter("ready")}>
          Paid
        </button>
        <button className="btnfilter" onClick={() => setFilter("pending")}>
        Not Paid 
        </button>
      </div>
      <div className="videeo1">
        {videos.map((video, index) => (
          <div key={index} className="video-item1">
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
              <p style={{ padding: "1rem .5rem", color: "#191943" }}>
                {video.snippet.title}
              </p>
            </Link>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
              }}
            >
              <p style={{ color: "#191943" }}>
                <MdOutlineRemoveRedEye />: {video.statistics.viewCount}
              </p>
              <p style={{ color: "#191943" }}>
                <AiOutlineLike />: {video.statistics.likeCount}
              </p>
              <p style={{ color: "#191943" }}>
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
