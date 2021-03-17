import React from 'react';
import {connect} from 'react-redux';
import {handleShowMoreByButton} from '../../store/action';
import {showMoreButtonPropTypes} from '../../prop-types/prop-types';

const ShowMoreButton = (props) => {
  const {handleClickButton} = props;

  return (
    <React.Fragment>
      <button className="catalog__button" type="button" onClick={handleClickButton}>Show more</button>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleClickButton() {
    dispatch(handleShowMoreByButton());
  },
});

ShowMoreButton.propTypes = showMoreButtonPropTypes;

export default connect(null, mapDispatchToProps)(ShowMoreButton);
