import React, {useEffect, useRef} from 'react';
import {videoPlayerPropTypes} from '../../prop-types/prop-types';

const VideoPlayer = ({previewImage, previewVideoLink, isPlaying}) => {
  const videoRef = useRef();

  useEffect(() =>{
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.load();
    }
  }, [isPlaying]);

  return (
    <React.Fragment>
      <video
        loop
        muted
        width="280"
        height="175"
        poster={previewImage}
        ref={videoRef}
        data-testid="video-player">Some Text
        <source src={previewVideoLink}/>
      </video>
    </React.Fragment>
  );
};

VideoPlayer.propTypes = videoPlayerPropTypes;

export default VideoPlayer;
