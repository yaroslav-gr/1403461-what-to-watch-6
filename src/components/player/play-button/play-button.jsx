import React from 'react';
import PropTypes from 'prop-types';

const PlayButton = ({onHandlePlayClick}) => {
  return (
    <React.Fragment>
      <button
        onClick={onHandlePlayClick}
        type="button"
        className="player__play"
        data-testid="play-button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
    </React.Fragment>
  );
};

PlayButton.propTypes = {
  onHandlePlayClick: PropTypes.func.isRequired,
};

export default PlayButton;
