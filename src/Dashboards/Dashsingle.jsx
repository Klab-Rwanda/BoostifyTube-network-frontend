import { Link, useParams } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import { MyContext } from "../context/Context";
import "../Styles/Dashsingle.css";

const Dashsingle = () => {
  const { videos } = MyContext();
  const { videoId } = useParams();
  const [isVideoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    const handleKeyDown = (event) => {
      // Prevent keyboard controls (spacebar, arrow keys, etc.)
      event.preventDefault();
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleVideoEnded);
      videoRef.current.addEventListener("contextmenu", handleContextMenu);
      videoRef.current.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", handleVideoEnded);
        videoRef.current.removeEventListener("contextmenu", handleContextMenu);
        videoRef.current.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  const videoinf = videos?.find((video) => video.id === videoId);
  if (!videoinf) {
    return <div>Loading...</div>;
  }
  const { title, viewCount, likeCount, commentCount } = videoinf.statistics;

  return (
    <div className="view-video">
      <div className="video-itemb">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          allowFullScreen
          controls={!isVideoEnded}
          ref={videoRef}
          className="frame-view"
          style={{ pointerEvents: "none" }} // Disable mouse events
        ></iframe>
        <p>{title}</p>
        <p>Views: {viewCount}</p>
        <p>Likes: {likeCount}</p>
        <p>Comments: {commentCount}</p>
      </div>
      <div>
        {videos.map((video, index) => (
          <div key={index} className="video-itemm">
            <div>
              <iframe
                title={video.snippet.title}
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allowFullScreen
                style={{ borderRadius: 10 }}
                className="iframe-single-video"
              ></iframe>
            </div>
            <div className="single-videos1">
              <Link
                to={`/superdashboard/videos/${video.id}`}
                className="sinle-link-video"
              >
                <p>{video.snippet.title}</p>
              </Link>
              <p className="view-comments">
                Views: {video.statistics.viewCount}
              </p>
              <p className="view-comments">
                Likes: {video.statistics.likeCount}
              </p>
              <p className="view-comments">
                Comments: {video.statistics.commentCount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashsingle;
