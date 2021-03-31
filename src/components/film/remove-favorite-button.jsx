import React from 'react';
import {useDispatch} from 'react-redux';
import {StatusFavorite} from '../../const/const';
import {buttonsToggleFavorite} from '../../prop-types/prop-types';
import {toggleFavoriteFilm} from '../../store/api-actions';

const RemoveFavoriteButton = ({id}) => {
  const dispatch = useDispatch();

  const handlerButtonClick = () => {
    dispatch(toggleFavoriteFilm(id, StatusFavorite.REMOVE));
  };

  return (
    <React.Fragment>
      <button
        onClick={handlerButtonClick}
        className="btn btn--list movie-card__button"
        type="button">
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        <span>My list</span>
      </button>
    </React.Fragment>
  );
};

RemoveFavoriteButton.propTypes = buttonsToggleFavorite;

export default RemoveFavoriteButton;
