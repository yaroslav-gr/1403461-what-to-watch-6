export const ActionType = {
  SET_CURRENT_GENRE: `genres/setCurrentGenre`,
  SHOW_MORE_BY_BYTTON_CLICK: `films/showMoreByButtonClick`,
  RESET_COUNT_SHOWING_FILMS: `films/resetCountShowingFilms`,
  RESET_FILM_LIST: `films/resetFilmList`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_FILMS: `films/loadFilms`,
  ERROR_LOADING: `films/erroeLoading`,
  GET_AUTHOR_INFO: `login/getUserInfo`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  SET_BAD_REQUEST: `login/setBadRequest`,
};

export const ActionCreator = {
  setCurrentGenre: (newGenre) => ({
    type: ActionType.SET_CURRENT_GENRE,
    payload: newGenre,
  }),

  handleShowMoreByButton: () => ({
    type: ActionType.SHOW_MORE_BY_BYTTON_CLICK,
  }),

  resetCountShowingFilms: () => ({
    type: ActionType.RESET_COUNT_SHOWING_FILMS,
  }),

  resetFilmList: () => ({
    type: ActionType.RESET_FILM_LIST,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),

  setErrorLoading: (error) => ({
    type: ActionType.ERROR_LOADING,
    payload: error,
  }),

  getUserInfo: (userInfo) => ({
    type: ActionType.GET_AUTHOR_INFO,
    payload: userInfo,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),

  setBadRequest: () => ({
    type: ActionType.SET_BAD_REQUEST,
  }),
};
