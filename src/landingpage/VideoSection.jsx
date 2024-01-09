import React from "react";
import "../Styles/videoSection.css";
import demoVideo from "../assets/picture/assets/video.mp4"; 

const VideoSection = () => {
  return (
    <div className="video-section">

      <h2>How It Works</h2>
      <div className="video-row">
        <div className="video-container">
          <video style={{ backgroundColor: "black" }} controls>
            <source
              src={demoVideo}
              style={{ height: "900px" }}
              type="video/mp4"
            />
          </video>

          Watch our quick demo to learn how our platform connects YouTubers with
          viewers
        </div>
        <div className="text-container">
          <h2>User Guide</h2>
          <p>
            Watch our quick demo to learn how our platform connects YouTubers
            with viewers, helping content creators boost their channels and
            users earn money. Better together!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam
            eveniet porro dolorem sed cumque ipsum, suscipit veniam, amet
            voluptatum delectus odit doloremque quisquam iure ad mollitia rerum
            sunt neque!
          </p>
          <button className="get">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
