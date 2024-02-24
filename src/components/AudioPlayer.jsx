import React from 'react';
import ReactPlayer from 'react-player';

function AudioPlayer() {
  return (
    <ReactPlayer
      url="/audio/audio.mp3"
      autoPlay      
      controls            
      width="10%"
      height="50px"
    />
  );
}

export default AudioPlayer;