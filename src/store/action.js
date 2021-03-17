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

  export const setCurrentGenre = (newGenre) => ({
    type: ActionType.SET_CURRENT_GENRE,
    payload: newGenre,
  });

  export const handleShowMoreByButton = () => ({
    type: ActionType.SHOW_MORE_BY_BYTTON_CLICK,
  });

  export const resetCountShowingFilms = () => ({
    type: ActionType.RESET_COUNT_SHOWING_FILMS,
  });

  export const resetFilmList = () => ({
    type: ActionType.RESET_FILM_LIST,
  });

  export const requireAuthorization = (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  });

  export const loadFilms = (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  });

  export const setErrorLoading = (error) => ({
    type: ActionType.ERROR_LOADING,
    payload: error,
  });

  export const getUserInfo = (userInfo) => ({
    type: ActionType.GET_AUTHOR_INFO,
    payload: userInfo,
  });

  export const redirectToRoute = (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  });

  export const setBadRequest = () => ({
    type: ActionType.SET_BAD_REQUEST,
  });
