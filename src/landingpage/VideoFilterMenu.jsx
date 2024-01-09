import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { MyContext } from "../context/Context";
import axios from "axios";
import styled from "styled-components";

const VideoCard = ({ videoId, category }) => {
  const [videoData, setVideoData] = useState(null);
  const API_KEY = "AIzaSyCLyB5T0faW7qGwhnq07DJCeSA4I5RXJ_M"; // Replace with your actual API key

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
        );
        setVideoData(response.data.items[0]);
        console.log(" rere..", response.data.items[0].snippet.channelTitle);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoData();
  }, [videoId, API_KEY]);

  if (!videoData) {
    return <div>Loading...</div>;
  }

  const opts = {
    height: "200",
    width: "300",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="youtuber-singdle-video-cardss">
      <div className="youtuber-single-video-card">
        <YouTube videoId={videoId} opts={opts} />
        <p id="detail-title">
          {videoData.snippet.localized.title.slice(0, 50)}
        </p>
        <p id="detail">Views: {videoData.statistics.viewCount}</p>
        <p id="detail">Likes: {videoData.statistics.likeCount}</p>
        <p id="detail">Comments: {videoData.statistics.commentCount}</p>
        <p id="detail">Channel: {videoData.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

const VideoFilterMenu = () => {
  const { VideoDiscription, videoIdPerOwner, allVideoID } = MyContext();
  console.log("video filter ffff", videoIdPerOwner);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterVideos = (category) => {
    setSelectedCategory(category);
  };

  const videoData = [
    { id: 1, title: "Video 1", category: "Trends" },
    { id: 2, title: "Video 2", category: "Popular" },
    { id: 3, title: "Video 3", category: "Music" },
    { id: 4, title: "Video 4", category: "Movies" },
    // Add more dummy data as needed
  ];

  const filteredVideos =
    selectedCategory === "All"
      ? videoData
      : videoData.filter((video) => video.category === selectedCategory);

  return (
    <VideoFilterContainer>
      <h2 style={{ color: "black" }}>Highlight</h2>
      <FilterMenu>
        <button
          className={selectedCategory === "All" ? "active" : ""}
          onClick={() => filterVideos("All")}
        >
          All
        </button>
        <button
          className={selectedCategory === "Trends" ? "active" : ""}
          onClick={() => filterVideos("Trends")}
        >
          Trends
        </button>
        <button
          className={selectedCategory === "Popular" ? "active" : ""}
          onClick={() => filterVideos("Popular")}
        >
          Popular
        </button>
        <button
          className={selectedCategory === "Music" ? "active" : ""}
          onClick={() => filterVideos("Music")}
        >
          Music
        </button>
        <button
          className={selectedCategory === "Movies" ? "active" : ""}
          onClick={() => filterVideos("Movies")}
        >
          Movies
        </button>
      </FilterMenu>

      <VideoList>
        {allVideoID.map((videoId, index) => (
          <VideoCard
            key={index}
            videoId={videoId}
            category={selectedCategory}
            // style={{width:"200px"}}
          />
        ))}
      </VideoList>
    </VideoFilterContainer>
  );
};

const VideoFilterContainer = styled.div`
display:flex;
flex
//   max-width: 1800px;
  margin: 0 auto;
//   text-align: center;
  padding-left:60px;
  margin:2rem;
//   border: 1px solid red;
   flex-direction: column;
    justify-content: center;
    align-items: space-around;
    flex-wrap: wrap;
  
`;

const FilterMenu = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: #191943;
    color: #fff;
    border-radius: 5px;

    &.active {
      background-color: #fee60c;
      color:black;
    }
  }
`;

const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  boder:1px solid red
  width:20px
  
`;

export default VideoFilterMenu;
