import React, { useState, useEffect } from "react";
import "../Styles/VideoCards.css";

const VideoCard = ({ playlist }) => {
  const [playlistDetails, setPlaylistDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlist.playlistId}&maxResults=25&key=AIzaSyDBwaf4NcPBZ5lpW1Qr9kTg84Dqa9Dsazc`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch playlist items");
        }

        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setVideos(data.items);
          setPlaylistDetails(data.items[0].snippet.playlistTitle); 
        } else {
          console.error("No playlist items found in the API response.");
        }
      } catch (error) {
        console.error("Error fetching playlist items:", error.message);
      }
    };

    fetchData();
  }, [playlist.playlistId]);

  if (!videos.length) {
    return <div>Loading...</div>;
  }

  return (

      <div className="video-detailskk">
        <h3>{playlistDetails}</h3>
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <iframe
              title={video.snippet.title}
              width="300"
              height="200"
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p>{video.snippet.title}</p>
          </div>
        ))}
      </div>

  );
};

const VideoCards = () => {
  const playlists = [
    { playlistId: "PL366NUFRMdOsljKZYXszOD6qTEmuAyO-l" },
  ];

  return (
    <div className="video-cards-container">
      {playlists.map((playlist, index) => (
        <VideoCard key={index} playlist={playlist} />
      ))}
    </div>
  );
};

export default VideoCards;
