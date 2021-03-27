import React from 'react';
import PropTypes from 'prop-types';

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

FullScreenButton.propTypes = {
  handlerFullScreenClick: PropTypes.func.isRequired,
};

export default FullScreenButton;
