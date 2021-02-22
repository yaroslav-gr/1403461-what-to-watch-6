import React from 'react';
import {videoPlayerPropTypes} from '../../prop-types/prop-types';

const VideoPlayer = (props) => {
  const {previewImage, previewVideoLink} = props;

  return (
    <React.Fragment>
      <video poster={previewImage} loop>
        <source src={previewVideoLink}/>
      </video>
    </React.Fragment>
  );
};

VideoPlayer.propTypes = videoPlayerPropTypes;

export default VideoPlayer;
