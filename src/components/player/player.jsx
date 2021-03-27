import React, {useRef, useState} from 'react';
import PlayButton from './play-button';
import PauseButton from './pause-button';
import FullScreenButton from './full-screen-button';
import history from '../../browser-history';
import {filmPropTypes} from '../../prop-types/prop-types';
import {formatPlayerRunTime} from '../../utils/film';

const Player = ({film}) => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const [runTime, setRunTime] = useState({
    duration: 0,
    currentTime: 0,
  });

  const videoRef = useRef();

  const handlerPlayClick = () => {
    videoRef.current.play();
    setVideoPlaying(true);
  };

  const handlerPauseClick = () => {
    videoRef.current.pause();
    setVideoPlaying(false);
  };

  const handlerExitClick = () => {
    history.goBack();
  };

  const handlerFullScreenClick = () => {
    videoRef.current.requestFullscreen();
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

  return (
    <React.Fragment>
      <div className="player">
        <video muted
          onLoadedMetadata={handlerOnDataLoaded}
          onTimeUpdate={handlerTimeChange}
          src={film.videoLink}
          className="player__video"
          poster={film.backgroundImage}
          ref={videoRef}></video>

        <button onClick={handlerExitClick} type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: `20%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{formatPlayerRunTime(getRemainingTime())}</div>
          </div>

          <div className="player__controls-row">
            {isVideoPlaying ?
              <PauseButton handlerPauseClick={handlerPauseClick}/> :
              <PlayButton handlerPlayClick={handlerPlayClick}/>}
            <div className="player__name">Transpotting</div>

            <FullScreenButton handlerFullScreenClick={handlerFullScreenClick} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Player.propTypes = filmPropTypes;

export default Player;
