import {createReducer} from '@reduxjs/toolkit';
import {COUNT_FILMS_FOR_SHOWING} from '../../const/const';
import {setCurrentGenre, handleShowMoreByButton, resetCountShowingFilms, resetFilmList, loadFilms, setErrorLoading} from '../action';

const initialState = {
  films: [],
  activeGenre: `All genres`,
  filmListByGenre: [],
  countShowingFilms: COUNT_FILMS_FOR_SHOWING,
  isDataLoaded: false,
  isErrorLoading: false,
  errorMessage: ``,
};

const filmsData = createReducer(initialState, (builder) => {
  builder.addCase(setCurrentGenre, (state, action) => ({
    ...state,
    activeGenre: action.payload,
    filmListByGenre: action.payload === `All genres` ? state.films : state.films.filter((film) => film.genre === action.payload),
  }));
  builder.addCase(handleShowMoreByButton, (state) => ({
    ...state,
    countShowingFilms: state.countShowingFilms + COUNT_FILMS_FOR_SHOWING,
  }));
  builder.addCase(resetCountShowingFilms, (state) => ({
    ...state,
    countShowingFilms: COUNT_FILMS_FOR_SHOWING,
  }));
  builder.addCase(resetFilmList, (state) => ({
    ...state,
    filmListByGenre: state.films,
    activeGenre: `All genres`,
    countShowingFilms: COUNT_FILMS_FOR_SHOWING,
  }));
  builder.addCase(loadFilms, (state, action) => ({
    ...state,
    films: action.payload,
    isDataLoaded: true,
    filmListByGenre: action.payload,
  }));
  builder.addCase(setErrorLoading, (state, action) => ({
    ...state,
    isErrorLoading: true,
    errorMessage: `${action.payload.response.status} ${action.payload.response.statusText}`,
  }));
});

export {filmsData};
