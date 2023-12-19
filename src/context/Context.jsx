import { createContext, useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const stateContext = createContext();

export const AppContext = ({ children }) => {
  const [videos, setVideos] = useState([]);

   const accessToken = localStorage.getItem("token");


  // ======== youtuber fetch upload video========



 
const {data : uploadedVideos = [], isLoading} =useQuery({
  queryFn:  async () => {
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


 
  const [youtuberUploadVideo, setYoutuberUploadVideo] = useState([]);
 
  

  


  const videoLinks = [];

  for (let i = 0; i < uploadedVideos.length; i++) {
    videoLinks.push(uploadedVideos[i]?.linkOfVideo);
  }

  const getYouTubeVideoId = (url) => {
    const regex =
      /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoIdss = [];

  for (let i = 0; i < videoLinks.length; i++) {
    videoIdss.push(getYouTubeVideoId(videoLinks[i]));
  }

  console.log("99999999999", videoIdss);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("hhhhhhhhhh", videoIdss);

        if (!videoIdss || videoIdss.length === 0) {
          console.error("No video IDs provided.");
          return;
        }

        const videoIdsParam = videoIdss.join(",");
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
  }, [videoIdss]);



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

   let user = JSON.parse(localStorage.getItem("userdata"));
   let data = user?.userInfo;
   let userId = data._id;
   // console.log("=================", userId);
   // let userData = user?.user;
   // console.log(userData);

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

    <stateContext.Provider value={{ videos, setVideos, fetchUsersData,messageLoading,Messages, fetchUsersData, youtuberUploadVideo,loggedUser }}>
      {children}
    </stateContext.Provider>
  );
};

export const MyContext = () => useContext(stateContext);
