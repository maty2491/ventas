import React from 'react';
import ReactPlayer from 'react-player';

function AudioPlayer() {
  return (
    <ReactPlayer
      url="/audio/audio.mp3"
      autoPlay      
      controls      
      height="40px"
    />
  );
}

export default AudioPlayer;