import React, {useRef, useState} from 'react';
import PlayButton from './play-button';
import PauseButton from './pause-button';
import FullScreenButton from './full-screen-button';
import history from '../../browser-history';
import {filmPropTypes} from '../../prop-types/prop-types';
import {formatPlayerRunTime} from '../../utils/film';

const Player = ({film}) => {
  const [isVideoPlaying, setVideoPlaying] = useState(true);
  const [runTime, setRunTime] = useState({
    duration: 0,
    currentTime: 0,
  });

  const videoRef = useRef();

  const onHandlePlayClick = () => {
    videoRef.current.play();
    setVideoPlaying(true);
  };

  const onHandlePauseClick = () => {
    videoRef.current.pause();
    setVideoPlaying(false);
  };

  const handlerExitClick = () => {
    history.goBack();
  };

  const handlerOnDataLoaded = () => {
    setRunTime({
      duration: videoRef.current.duration,
      currentTime: videoRef.current.currentTime,
    });
  };

  const handlerTimeChange = () => {
    setRunTime({
      ...runTime,
      currentTime: videoRef.current.currentTime,
    });
  };

  const getRemainingTime = () => {
    return runTime.duration - runTime.currentTime;
  };

  const getTimeProgressPosition = () => {
    const newPosition = runTime.currentTime / runTime.duration * 100;
    return newPosition;
  };

  const enterFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullScreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const checkFullscreen = () => {
    return document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement;
  };

  const onHandleFullScreenClick = () => {
    if (checkFullscreen()) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  return (
    <React.Fragment>
      <div className="player">
        <video muted
          autoPlay="1"
          onLoadedMetadata={handlerOnDataLoaded}
          onTimeUpdate={handlerTimeChange}
          src={film.videoLink}
          className="player__video"
          poster={film.backgroundImage}
          ref={videoRef}/>

        <button onClick={handlerExitClick} type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={`${getTimeProgressPosition()}`} max="100"></progress>
              <div className="player__toggler" style={{left: `${getTimeProgressPosition()}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{formatPlayerRunTime(getRemainingTime())}</div>
          </div>

          <div className="player__controls-row">
            {isVideoPlaying ?
              <PauseButton onHandlePauseClick={onHandlePauseClick}/> :
              <PlayButton onHandlePlayClick={onHandlePlayClick}/>}
            <div className="player__name">Transpotting</div>

            <FullScreenButton onHandleFullScreenClick={onHandleFullScreenClick} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Player.propTypes = filmPropTypes;

export default Player;
