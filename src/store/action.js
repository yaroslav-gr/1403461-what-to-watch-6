export const ActionType = {
  SET_CURRENT_GENRE: `genres/setCurrentGenre`,
  SHOW_MORE_BY_BYTTON_CLICK: `films/showMoreByButtonClick`,
  RESET_COUNT_SHOWING_FILMS: `films/resetCountShowingFilms`,
  RESET_FILM_LIST: `films/resetFilmList`,
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
  })
};
