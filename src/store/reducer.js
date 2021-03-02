import {films} from '../moks/films';
import {GENRES} from '../const/const';
import {ActionType} from '../store/action';

const initialState = {
  films: films,
  genres: GENRES,
  activeGenre: `All genres`,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
      }
  };
    return state;
};

export {reducer};
