import React from 'react';
import {videoPlayerPropTypes} from '../../prop-types/prop-types';

const VideoPlayer = (props) => {
  const {previewImage, previewVideoLink} = props;

  return (
    <React.Fragment>
      <video width="280" height="175"
      poster={previewImage} loop muted>
        <source src={previewVideoLink}/>
      </video>
    </React.Fragment>
  );
};

VideoPlayer.propTypes = videoPlayerPropTypes;

export default VideoPlayer;
