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
      // console.log("Videos response", res);

      return res.data;
    },
    onError: (data) => {
      console.log("onError", data.error);
    },
  });

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
    .filter(Boolean);
  const videoIdPerOwner = videoLinksPerOwner
    .map((link) => getYouTubeVideoId(link))
    .filter(Boolean);
// console.log("iddssssss", videoIdPerOwner);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        if  (!videoIdPerOwner || videoIdPerOwner.length === 0) {
          console.error("single video No video IDs provided.");
          return;
        }

        const videoIdsParam = videoIdPerOwner.join(",");

        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIdsParam}&key=AIzaSyCn4fHkJqf0VG9MutSUCWLf-THIYANC2rE`
        );
        // console.log('idsss',response);
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }

        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setOwnerVideos(data.items);
        } else {
          console.error("No videos found in the API response.");
        }
      } catch (error) {
        console.error("Error fetching videos:", error.error);
      }
    };

    fetchDatas();
  }, [videoIdPerOwner]);




  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!videoIdss || videoIdss.length === 0) {
          console.error("No video IDs provided.");
          return;
        }

        const videoIdsParam = videoIdss.join(",");

        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIdsParam}&key=AIzaSyCn4fHkJqf0VG9MutSUCWLf-THIYANC2rE`
        );
        // console.log('idsss',response);
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
        console.error("Error fetching videos:", error.error);
      }
    };

    fetchData();
  }, [videoIdss]);

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
      // console.log("response", res.data);
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
