import React from 'react';
import {useDispatch} from 'react-redux';
import {handleShowMoreByButton} from '../../store/action';

const ShowMoreButton = (prps) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <button className="catalog__button" type="button" onClick={() => dispatch(handleShowMoreByButton())}>Show more</button>
    </React.Fragment>
  );
};

export default ShowMoreButton;
