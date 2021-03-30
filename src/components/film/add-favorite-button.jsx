import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute, StatusFavorite} from '../../const/const';
import {buttonsToggleFavorite} from '../../prop-types/prop-types';
import {toggleFavoriteFilm} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const/const';
import {redirectToRoute} from '../../store/action';

const AddFavoriteButton = ({id}) => {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector((state) => state.LOGIN.authorizationStatus);

  const handlerButtonClick = () => {
    if(authorizationStatus === AuthorizationStatus.AUTH) {
      dispatch(toggleFavoriteFilm(id, StatusFavorite.ADD));
    } else {
      dispatch(redirectToRoute(AppRoute.LOGIN));
    }
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
