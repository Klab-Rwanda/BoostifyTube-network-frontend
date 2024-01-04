import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const stateContext = createContext();

export const AppContext = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const accessToken = localStorage.getItem("token");

  const { data: uploadedVideos = [], isLoading } = useQuery({
    queryFn: async () => {
      const res = await axios.get(
        "https://boostifytube-network-api.onrender.com/api/v1/video/getAll",
        {
          headers: {
            Authorization: `Bearer ${accessToken?.access_token}`,
          },
        }
      );
      console.log(res.data);
      return res.data;
    },
    onError: (data) => {
      console.log("onError", data.error);
    },
  });

  console.log(uploadedVideos);

  const videoLinks = uploadedVideos
    .map((video) => video?.linkOfVideo)
    .filter(Boolean);

  const getYouTubeVideoId = (url) => {
    const regex =
      /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoIdss = videoLinks
    .map((link) => getYouTubeVideoId(link))
    .filter(Boolean);

 

  const videoIdsParam = videoIdss.join(",");
  console.log(videoIdsParam);

  const fecthvideos = useQuery({
    queryKey: ["videoss"],
    queryFn: async () => {
      if (uploadedVideos) {
        const res = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIdsParam}&key=AIzaSyDBwaf4NcPBZ5lpW1Qr9kTg84Dqa9Dsazc`
        );
        return res.data;
      } else {
        console.log("Link has issue");
      }
    },
  });


  

  

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
      return res.data;
    },
    onError: (data) => {
      console.log("onError", data.error);
    },
  });

  let user = JSON.parse(localStorage.getItem("userdata"));
  let data = user?.userInfo;
  let userId = data?._id;

  const { data: loggedUser } = useQuery({
    queryKey: ["logged_users"],
    queryFn: async () => {
      const res = await axios.get(
        `https://boostifytube-network-api.onrender.com/api/v1/user/getOneUser/${userId}`
      );
      // console.log("Responseeeeeeeeeeeeeeeee", res.data.user.image);
      return res.data;
    },
  });

  const { data: Messages, isLoading: messageLoading } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const messsageres = await axios.get(
        "https://boostifytube-network-api.onrender.com/api/v1/user/getAllContact",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return messsageres.data;
    },
  });

  return (
    <stateContext.Provider
      value={{
        videos,
        setVideos,
        fetchUsersData,
        messageLoading,
        Messages,
        fetchUsersData,
        loggedUser,
        uploadedVideos,
        isLoading,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const MyContext = () => useContext(stateContext);
