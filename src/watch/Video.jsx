import React, { useState, useEffect } from "react";
import "./Video.css";
import { Link } from "react-router-dom";
import { MyContext } from "../context/Context";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

import ReactPaginate from "react-paginate";

const VideoCard = () => {

  const {videos}= MyContext();
  if (!videos || videos.length === 0) {
    return <div>Loading...</div>;
  }

  const [pagenumber,setPagenumber]=useState(0);
  const videopage=8;
  const pagevisited=pagenumber*videopage;
  const displayvideo=videos
  .slice(pagevisited,pagevisited+videopage);
  
  
  const changepage= ({selected})=>{
    setPagenumber(selected)
  };


  return (
    <div>
    <div className="videeo">
      
      {displayvideo.map((video, index) => (
        
        <div key={index} className="video-item">
          <iframe
            title={video.snippet.title}
            src={`https://www.youtube.com/embed/${video.id}`}
            allowFullScreen
           className="allvideo-view"></iframe>
          <Link to={`/dashboard/video/${video.id}`} className="view-title">
          <p >{video.snippet.title}</p>
          </Link>
          <p className="view-comment">Views: {video.statistics.viewCount}</p>
          <p className="view-comment">Likes: {video.statistics.likeCount}</p>
          <p className="view-comment">Comments: {video.statistics.commentCount}</p>
        </div>
      ))}
    </div>
    
<ReactPaginate
    pageCount={Math.ceil(videos?.length  / videopage)}
    prevAriaLabel={"Prev"}
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
