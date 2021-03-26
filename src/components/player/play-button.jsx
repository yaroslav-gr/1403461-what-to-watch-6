import React from 'react';

const PlayButton = ({handlerPlayClick}) => {
  return (
    <React.Fragment>
      <button
      onClick={handlerPlayClick}
      type="button"
      className="player__play">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
    </React.Fragment>
  );
};

export default PlayButton;
