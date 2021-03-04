import React from 'react';
import {connect} from 'react-redux';
import { ActionCreator } from '../../store/action';

const ShowMoreButton = (props) => {
  const {handleClickButton} = props;

  return (
    <React.Fragment>
      <button className="catalog__button" type="button" onClick={handleClickButton}>Show more</button>
    </React.Fragment>
  )
};

const mapDispatchToProps = (dispatch) => ({
  handleClickButton() {
    dispatch(ActionCreator.handleShowMoreByButton())
  }
});

export default connect(null, mapDispatchToProps) (ShowMoreButton);
