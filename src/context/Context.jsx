import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const stateContext = createContext();

export const AppContext = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [ownerVideos, setOwnerVideos] = useState([]);

  const [myOwnVideo, setMyOwnVideo] = useState([]);
  const accessToken = localStorage.getItem("token");


  useEffect(()=>{
      axios
        .get(
          "https://boostifytube-network-api.onrender.com/api/v1/video/getYourVideo",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((data) => {
          console.log("feeeetchh xxxxxx",data.data);
          setMyOwnVideo(data.data?.videos);
        })
        .catch((error) => {
           console.log(
             "Failed to get the video",
             error.response?.data || error.message
           );
          //  alert("Failed to get the video. Please try again later.");
        });
  },[])
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
  const videoLinksPerOwner = myOwnVideo
    .map((video) => video?.linkOfVideo)
    .filter(Boolean);
// console.log("linksssskxxxxx", videoLinksPerOwner);
  const getYouTubeVideoId = (url) => {
    const regex =
      /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoIdss = videoLinks
    .map((link) => getYouTubeVideoId(link))


  let token = localStorage.getItem("token");

  const { data: youtuberHistory } = useQuery({
    queryKey: ["history"],
    queryFn: async () => {
      const res = await axios.get(
        "https://boostifytube-network-api.onrender.com/api/v1/payment/transactions",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("history response hhhhhh", res.data);
      return res.data;
    },
    onError: (data) => {
      console.log("onError", data.error);
    },
  });
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
        ownerVideos,
        setOwnerVideos,
        fetchUsersData,
        messageLoading,
        Messages,
        fetchUsersData,
        loggedUser,
        myOwnVideo,
        uploadedVideos,
        youtuberHistory,
        isLoading,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const MyContext = () => useContext(stateContext);
