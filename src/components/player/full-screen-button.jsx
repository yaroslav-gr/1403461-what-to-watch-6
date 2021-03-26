import React from 'react';

const FullScreenButton = ({handlerFullScreenClick}) => {
  return (
    <React.Fragment>
      <button
      onClick={handlerFullScreenClick}
      type="button"
      className="player__full-screen">
        <svg viewBox="0 0 27 27" width="27" height="27">
          <use xlinkHref="#full-screen"></use>
        </svg>
        <span>Full screen</span>
      </button>
    </React.Fragment>
  );
};

export default FullScreenButton;
