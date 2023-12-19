import React from "react";
import "../Styles/home.css";
import pic from "../../public/images/homepiccc.png";
import VideoSection from "./VideoSection";
import VideoCardss from "./VideoCardss";

const Home = () => {
  return (
    <>
      <div className="home-continer">
        <div className="home-picturee">
          <img src={pic} alt="" style={{ width: "40%", height: "60rem" }} />
        </div>
        <div className="home-description">
          <h2 id="title1">Boost Your YouTube Channel, Earn Rewards!</h2>
          <p id="desc1">
            Welcome to ORGIN GROUP LTD, the perfect place where content creators
            and viewers can benefit from each other. Are you a YouTuber looking
            to boost your video views? Or maybe you enjoy watching videos and
            would like to earn rewards while doing so? Look no further - you
            have come to the right place!
          </p>
          <button className="get">Get Starterd</button>
        </div>
      </div>

      <VideoSection />
      <VideoCardss />
    </>
  );
};

export default Home;
