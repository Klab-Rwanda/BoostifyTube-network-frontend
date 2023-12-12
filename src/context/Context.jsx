import { createContext, useContext, useEffect, useState } from "react";
const stateContext = createContext();

export const AppContext = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoIds = [
          "w0mI3_xGves",
          "ASFx79CSSOE",
          "vMWgA2h6OX0",
          "88542cowyIA",
          "-RsAP6A5rNs",
          "-RsAP6A5rNs",
          "cvIfzoeDPCk",
          "w0mI3_xGves",
          "-E74uXVVDcg",
        ];

        if (!videoIds || videoIds.length === 0) {
          console.error("No video IDs provided.");
          return;
        }

        const videoIdsParam = videoIds.join(",");
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIdsParam}&key=AIzaSyDBwaf4NcPBZ5lpW1Qr9kTg84Dqa9Dsazc
      `
        );

        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }

        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setVideos(data.items);
        } else {
          console.error("No videos found in the API response.");
        }
      } catch (error) {
        console.error("Error fetching videos:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <stateContext.Provider value={{ videos, setVideos }}>
      {children}
    </stateContext.Provider>
  );
};

export const MyContext = () => useContext(stateContext);
