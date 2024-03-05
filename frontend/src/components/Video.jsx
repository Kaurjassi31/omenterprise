import React from 'react';
import video1 from "../assets/video2.MP4"

function VideoPlayer() {
  return (
    <div className='container'>
      <video className='mt-5' style={{height:"500px",width:"100%"}} controls>
        <source src={video1}  />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
