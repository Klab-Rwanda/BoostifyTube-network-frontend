import React from "react";
import "../Styles/VideoSection.css";
import demoVideo from "../../public/videos/tom.mp4"; // Import the path to your video file

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="video-container">
        <video width="560" height="315" controls>
          <source src={demoVideo} type="video/mp4" />
        </video>
        Watch our quick demo to learn how our platform connects YouTubers with
        viewers
      </div>
      <div className="text-container">
        <h2>See How It Works</h2>
        <p>
          Watch our quick demo to learn how our platform connects YouTubers with
          viewers, helping content creators boost their channels and users earn
          money. Better together!
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
