import React from "react";

const getYouTubeVideoId = (url) => {
  const regex =
    /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const match = url.match(regex);

  return match ? match[1] : null;
};

const MyComponent = () => {
  const youtubeLink = "https://www.youtube.com/watch?v=KjMX-ZdLa-A";
  const videoId = getYouTubeVideoId(youtubeLink);
  console.log("videoId: " + videoId);

  return (
    <div>
      <p>YouTube Video ID: {videoId}</p>
    </div>
  );
};

export default MyComponent;