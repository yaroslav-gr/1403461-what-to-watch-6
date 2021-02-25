import {films} from '../moks/films';
import {GENRES} from '../const/const';

const initialState = {
  films,
  GENRES,
}

const reducer = (state = initialState, action) => {
  return {
    ...state,
    films: action,
    GENRES: action,
  }
};

export {reducer};
