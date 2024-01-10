
import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/Context";
import "./Single-viewvideo.css";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
export const CardSkeleton = () => {
  return (
    <p>
      <Skeleton height={300} />
    </p>
  );
};

const VideoCard1 = ({ videoId }) => {

  const API_KEY = "AIzaSyCLyB5T0faW7qGwhnq07DJCeSA4I5RXJ_M";

    const { data:videoData1, isLoading } = useQuery({
      queryKey: ["videos"],
      queryFn: async () => {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
        );
        return response.data.items[0];
      },
    });


  const opts2 = {
    height: "200",
    width: "300",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="youtube-dive">
      <div className="video-it">
        <YouTube videoId={videoId} opts={opts2} />
        <Link to={`/dashboard/Videocardss/${videoId}`} className="view-title">
          <p id="det">{videoData1?.snippet.localized.title}</p>
        </Link>
        <div style={{ display: "flex" }}>
          <p id="det">
            <MdOutlineRemoveRedEye /> {videoData1?.statistics.viewCount}
          </p>
          <p id="det">
            <AiOutlineLike /> {videoData1?.statistics.likeCount}
          </p>
          <p id="det">
            <FaRegComment /> {videoData1?.statistics.commentCount}
          </p>
        </div>
        <p id="det" style={{ marginLeft: "5%" }}>
          Channel: {videoData1?.snippet.channelTitle}
        </p>
      </div>
    </div>
  );
};

const Singlevideo = () => {
  const { videoId } = useParams();
  const API_KEY = "AIzaSyCLyB5T0faW7qGwhnq07DJCeSA4I5RXJ_M";
  const [skeletonLoader, setSkeletonLoader] = useState(false);

  const { uploadedVideos } = MyContext();

let uploadedvideoId;
  for(let i = 0 ; i < uploadedVideos.length; i++) {
     uploadedvideoId = uploadedVideos[i]?._id;
  }
  const videoLinks2 = uploadedVideos
    .map((video) => video?.linkOfVideo)
    .filter(Boolean);

  const getYouTubeVideoId = (url) => {
    const regex =
      /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoIdss2 = videoLinks2
    .map((link) => getYouTubeVideoId(link))
    .filter(Boolean);

  const { data: videoInfo, isLoading } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
      );
      return response.data.items[0];
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setSkeletonLoader(true);
    }, 7000);
    setSkeletonLoader(false);
  }, [isLoading]);

  let token = localStorage.getItem("token");
 console.log("Mutation", uploadedvideoId)

  
  const trackMutation = useMutation({    
    mutationFn: async () => {
      const res = await axios.post(
        `https://boostifytube-network-api.onrender.com/api/v1/video/tracking/${uploadedvideoId}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return res.data;
    },
    onSuccess: (data) => {
      alert("Success");
    },
    onError: (error) => {
      console.log(error.response.data);
    },
  });

  const handleVideoTrack = async () => {
    trackMutation.mutate();
  };

  return (
    <div className="view-videoo">
      <div className="video-item123">
        <YouTube
          style={{ width: "100%" }}
          videoId={videoId}
          opts={{
            borderRadius: "10",
            height: "350",
            width: "600",
            playerVars: { autoplay: 1, mute: 1 },
          }}
          allowFullScreen
          className="frame-view"
          onEnd={() => {
            return handleVideoTrack();
          }}
        />

        <p>{videoInfo?.snippet.localized.title}</p>
        <div style={{ display: "flex", gap: "10%" }}>
          <p>
            {" "}
            <MdOutlineRemoveRedEye /> {videoInfo?.snippet.localized.viewCount}
          </p>
          <p>
            <AiOutlineLike /> {videoInfo?.snippet.localized.likeCount}
          </p>
          <p>
            <FaRegComment /> {videoInfo?.snippet.localized.commentCount}
          </p>
        </div>
        <p>Channel: {videoInfo?.snippet.localized.channelTitle}</p>
      </div>
      {isLoading ? (
        <div>
          <div
            style={{
              width: "600",
              height: "350",
            }}
          >
            <Skeleton width={310} height={200} />.
            <div className="youtube-dive">
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            opacity: skeletonLoader ? "1" : "0",
          }}
        >
          <div className="video-container1">
            {videoIdss2
              .filter((id) => id !== videoId)
              .map((videoId2, index) => (
                <VideoCard1
                  key={index}
                  videoId={videoId2}
                  title={`Video ${index + 1}`}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Singlevideo;
