import React from 'react';
import {useDispatch} from 'react-redux';
import {StatusFavorite} from '../../const/const';
import {buttonsToggleFavorite} from '../../prop-types/prop-types';
import {toggleFavoriteFilm} from '../../store/api-actions';

const AddFavoriteButton = ({id}) => {
  const dispatch = useDispatch();

  const handlerButtonClick = () => {
    dispatch(toggleFavoriteFilm(id, StatusFavorite.ADD));
  };

  return (
    <React.Fragment>
      <button
        onClick={handlerButtonClick}
        className="btn btn--list movie-card__button"
        type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
    </React.Fragment>
  );
};

AddFavoriteButton.propTypes = buttonsToggleFavorite;

export default AddFavoriteButton;
