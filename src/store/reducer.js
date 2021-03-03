import {films} from '../moks/films';
import {GENRES} from '../const/const';
import {ActionType} from '../store/action';

const initialState = {
  films,
  genres: GENRES,
  activeGenre: `All genres`,
  actualFlimList: films
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
        actualFlimList: action.payload === `All genres` ? state.films : state.films.filter((film) => film.genre === action.payload),
      };
  }
  return state;
};

export {reducer};
