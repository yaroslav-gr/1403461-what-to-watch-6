import {COUNT_FILMS_FOR_SHOWING} from '../../const/const';
import {ActionType} from '../action';

const initialState = {
  films: [],
  activeGenre: `All genres`,
  filmListByGenre: [],
  countShowingFilms: COUNT_FILMS_FOR_SHOWING,
  isDataLoaded: false,
  isErrorLoading: false,
  errorMessage: ``,
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
        filmListByGenre: action.payload === `All genres` ? state.films : state.films.filter((film) => film.genre === action.payload),
      };
    case ActionType.SHOW_MORE_BY_BYTTON_CLICK:
      return {
        ...state,
        countShowingFilms: state.countShowingFilms + COUNT_FILMS_FOR_SHOWING,
      };
    case ActionType.RESET_COUNT_SHOWING_FILMS:
      return {
        ...state,
        countShowingFilms: COUNT_FILMS_FOR_SHOWING,
      };
    case ActionType.RESET_FILM_LIST:
      return {
        ...state,
        filmListByGenre: state.films,
        activeGenre: `All genres`,
        countShowingFilms: COUNT_FILMS_FOR_SHOWING,
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isDataLoaded: true,
        filmListByGenre: action.payload,
      };
      case ActionType.ERROR_LOADING:
      return {
        ...state,
        isErrorLoading: true,
        errorMessage: `${action.payload.response.status} ${action.payload.response.statusText}`,
      };
  }
  return state;
};

export {filmsData};
