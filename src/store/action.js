import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SHOW_MORE_BY_BYTTON_CLICK: `films/showMoreByButtonClick`,
  RESET_COUNT_SHOWING_FILMS: `films/resetCountShowingFilms`,
  RESET_FILM_LIST: `films/resetFilmList`,
  LOAD_FILMS: `films/loadFilms`,
  ERROR_LOADING: `films/erroeLoading`,
  GET_AUTHOR_INFO: `login/getUserInfo`,
  SET_BAD_REQUEST: `login/setBadRequest`,
  SET_CURRENT_GENRE: `genres/setCurrentGenre`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
};

  export const setCurrentGenre = createAction(ActionType.SET_CURRENT_GENRE, (newGenre) => ({
    payload: newGenre,
  }));

  export const handleShowMoreByButton = createAction(ActionType.SHOW_MORE_BY_BYTTON_CLICK);

  export const resetCountShowingFilms = createAction(ActionType.RESET_COUNT_SHOWING_FILMS);

  export const resetFilmList = createAction(ActionType.RESET_FILM_LIST);

  export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
    payload: status,
  }));

  export const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => ({
    payload: films,
  }));

  export const setErrorLoading = createAction(ActionType.ERROR_LOADING, (error) => ({
    payload: error,
  }));

  export const getUserInfo = createAction(ActionType.GET_AUTHOR_INFO, (userInfo) => ({
    payload: userInfo,
  }));

  export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
    payload: url,
  }));

  export const setBadRequest = createAction(ActionType.SET_BAD_REQUEST);
