import { createContext, useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const stateContext = createContext();

export const AppContext = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const accessToken = localStorage.getItem("token");
  const [youtuberUploadVideo, setYoutuberUploadVideo] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://boostifytube-network-api.onrender.com/api/v1/video/getAll",
        {
          headers: {
            Authorization: `Bearer ${accessToken?.access_token}`,
          },
        }
      )
      .then((data) => {
        console.log(data);
        setYoutuberUploadVideo(data.data);
      });
  }, []);
  // ======== end  youtuber fetch upload video========

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
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIdsParam}&key=AIzaSyDBwaf4NcPBZ5lpW1Qr9kTg84Dqa9Dsazc`
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

  let token = localStorage.getItem("token");

  const { data: fetchUsersData } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(
        "https://boostifytube-network-api.onrender.com/api/v1/user/getall",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      // console.log("response", res.data);
      return res.data;
    },
    onError: (data) => {
      console.log("onError", data.error);
    },
  });

  const { data: loggedUser } = useQuery({
    queryKey: ["logged_users"],
    queryFn: async () => {
      const res = await axios.get(
        url + `auth/users/getOne?fieldName=email&value=${userData.email}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return res.data;
    },
  });


   const { data: Messages, isLoading: messageLoading } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const messsageres = await axios.get(
        "https://boostifytube-network-api.onrender.com/api/v1/user/getAllContact",{
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(messsageres.data);
      return messsageres.data;
      
    },
   
  });

  return (
    <stateContext.Provider value={{ videos, setVideos, fetchUsersData,messageLoading,Messages,videos, setVideos, fetchUsersData, youtuberUploadVideo }}>
  
      {children}
    </stateContext.Provider>
  );
};

export const MyContext = () => useContext(stateContext);
