import React, { useState, useEffect } from "react";
import "./Video.css";
import { Link } from "react-router-dom";
import { MyContext } from "../context/Context";
import ReactPaginate from "react-paginate";

const VideoCard = () => {

  const {videos}= MyContext();
  
  if (!videos || videos.length === 0) {
    return <div>Loading...</div>;
  }

  const [pagenumber,setPagenumber]=useState(0);
  const videopage=6;
  const pagevisited=pagenumber*videopage;
  const displayvideo=videos
  .slice(pagevisited,pagevisited+videopage);
  
  
  const changepage= ({selected})=>{
    setPagenumber(selected)
  };


  return (
    <div className="videeo">
      
      {displayvideo.map((video, index) => (
        
        <div key={index} className="video-item">
          <iframe
            title={video.snippet.title}
            width="300"
            height="200"
            src={`https://www.youtube.com/embed/${video.id}`}
            allowFullScreen
           className="allvideo-view"></iframe>
          <Link to={`/dashboard/video/${video.id}`} className="view-title">
          <p >{video.snippet.title}</p>
          </Link>
          <p>Views: {video.statistics.viewCount}</p>
          <p>Likes: {video.statistics.likeCount}</p>
          <p>Comments: {video.statistics.commentCount}</p>
        </div>
      ))}

<ReactPaginate
    pageCount={Math.ceil(videos?.length  / videopage)}
    previousAriaLabel={"Prev"}
    nextLabel={"Next"}
    onPageChange={changepage}
    containerClassName='pagination'
    previousLinkClassName='prevBtn'
    nextLinkClassName='next'
    disabledClassName='disabled'
    activeClassName='paginationactve'
    >

    </ReactPaginate>
    </div>
  );
};
export default VideoCard;
