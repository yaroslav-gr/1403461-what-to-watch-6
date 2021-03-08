import {films} from '../moks/films';
import {COUNT_FILMS_FOR_SHOWING, AuthorizationStatus} from '../const/const';
import {ActionType} from '../store/action';

const initialState = {
  films: [],
  activeGenre: `All genres`,
  filmListByGenre: films,
  countShowingFilms: COUNT_FILMS_FOR_SHOWING,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const reducer = (state = initialState, action) => {
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
        filmListByGenre: films,
        activeGenre: `All genres`,
        countShowingFilms: COUNT_FILMS_FOR_SHOWING,
      };
    case ActionType.REQUIRED_AUTHORIZATION: 
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
      };
  }
  return state;
};

export {reducer};
