import {films} from '../moks/films';
import {COUNT_FILMS_FOR_SHOWING} from '../const/const';
import {ActionType} from '../store/action';

const initialState = {
  films,
  activeGenre: `All genres`,
  filmListByGenre: films,
  countFilmsByButton: COUNT_FILMS_FOR_SHOWING,
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
        countFilmsByButton: state.countFilmsByButton + COUNT_FILMS_FOR_SHOWING,
      }
    case ActionType.RESET_COUNT_SHOWING_FILMS: 
      return {
        ...state,
        countFilmsByButton: COUNT_FILMS_FOR_SHOWING,
      }  
  }
  return state;
};

export {reducer};
