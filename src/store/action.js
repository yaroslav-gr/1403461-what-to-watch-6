export const ActionType = {
  SET_CURRENT_GENRE: `genres/setCurrentGenre`,
};

export const ActionCreator = {
  setCurrentGenre: (newGenre) => ({
    type: ActionType.SET_CURRENT_GENRE,
    payload: newGenre,
  }),

  getFilmListByGenre: () => ({
    type: ActionType.GET_FILMLIST_BY_GENRE,
  }),
};
