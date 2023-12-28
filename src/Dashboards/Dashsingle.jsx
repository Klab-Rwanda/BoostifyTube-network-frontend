import { Link, useParams } from 'react-router-dom';
import React from 'react';
import { MyContext } from '../context/Context';
import "../Styles/Dashsingle.css";
const Dashsingle = () => {
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
      <div className="video-itemb">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          allowFullScreen
        
         className='frame-view'>

        </iframe>
        <p> {title}</p>
        <p >Views: {viewCount}</p>
        <p >Likes: {likeCount}</p>
        <p >Comments: {commentCount}</p>
      </div>
      <div  >
      {videos.map((video, index) => (
        
        <div key={index} className="video-itemm"  >
          <div>
          <iframe
            title={video.snippet.title}
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allowFullScreen
            style={{borderRadius:10}}
           className='iframe-single-video'></iframe>
          </div>
          <div className='single-videos1'>
          <Link to={`/superdashboard/videos/${video.id}`} className='sinle-link-video' >
          <p>{video.snippet.title}</p>
          </Link>
          <p className="view-comments">Views: {video.statistics.viewCount}</p>
          <p className="view-comments">Likes: {video.statistics.likeCount}</p>
          <p className="view-comments">Comments: {video.statistics.commentCount}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Dashsingle;