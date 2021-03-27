import React from 'react';
import PropTypes from 'prop-types';

const PauseButton = ({handlerPauseClick}) => {
  return (
    <React.Fragment>
      <button
      onClick={handlerPauseClick}
      type="button"
      className="player__play">
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </button>
    </React.Fragment>
  );
};

PauseButton.propTypes = {
  handlerPauseClick: PropTypes.func.isRequired,
};

export default PauseButton;
