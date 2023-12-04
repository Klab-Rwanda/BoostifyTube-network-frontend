import { Link, useParams } from 'react-router-dom';
import React from 'react';
import { MyContext } from '../context/Context';
import './Single-viewvideo.css'
const Singlevideo = () => {
  const { videos } = MyContext();

 
  const { videoId } = useParams();

  console.log(videoId);


  const videoinf = videos?.find((video) => video.id === videoId);
  if (!videoinf) {
    return <div>Loading...</div>;
  }
  const { viewCount, title, likeCount, commentCount } = videoinf.statistics;

  return (
    <div className="view-video">
      <div className="video-item">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          allowFullScreen
        
         className='frame-view'>

        </iframe>
        <p>{title}</p>
        <p >Views: {viewCount}</p>
        <p >Likes: {likeCount}</p>
        <p >Comments: {commentCount}</p>
      </div>
      <div  >
      {videos.map((video, index) => (
        
        <div key={index} className="video-item" style={{display:'flex',gap:10}} >
          <div>
          <iframe
            title={video.snippet.title}
            width="250"
            height="150"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allowFullScreen
            style={{borderRadius:10}}
          ></iframe>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10,fontSize:14}}>
          <Link to={`/dashboard/video/${video.id}`}  style={{width:200,textDecoration:'none'}}>
          <p>{video.snippet.title}</p>
          </Link>
          <p>Views: {video.statistics.viewCount}</p>
          <p>Likes: {video.statistics.likeCount}</p>
          <p>Comments: {video.statistics.commentCount}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Singlevideo;

