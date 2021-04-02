import {createReducer} from '@reduxjs/toolkit';
import {COUNT_FILMS_FOR_SHOWING, MORE_LIKE_THIS_FILMS_COUNT} from '../../const/const';
import {
  setCurrentGenre,
  handleShowMoreByButton,
  resetCountShowingFilms,
  resetFilmList,
  loadFilms,
  setErrorLoading,
  loadFilmInfo,
  setErrorUploadComment,
  setUploadCommentStatus,
  loadFilmReviews,
  getMoreLikeThisFilms} from '../action';

export const initialState = {
  films: [],
  activeGenre: `All genres`,
  filmListByGenre: [],
  countShowingFilms: COUNT_FILMS_FOR_SHOWING,
  isDataLoaded: false,
  isErrorLoading: false,
  errorMessage: ``,
  uploadCommentStatus: false,
  isErrorUploadComment: false,
  filmInfo: {},
  moreLikeThisFilms: [],
  filmReviews: [],
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
  builder.addCase(loadFilmInfo, (state, action) => ({
    ...state,
    filmInfo: action.payload,
  }));
  builder.addCase(setUploadCommentStatus, (state, action) => ({
    ...state,
    uploadCommentStatus: action.payload,
  }));
  builder.addCase(setErrorUploadComment, (state, action) => ({
    ...state,
    isErrorUploadComment: action.payload,
  }));
  builder.addCase(loadFilmReviews, (state, action) => ({
    ...state,
    filmReviews: action.payload,
  }));
  builder.addCase(getMoreLikeThisFilms, (state) => ({
    ...state,
    moreLikeThisFilms: (state.films.filter((film) => film.id !== state.filmInfo.id && film.genre === state.filmInfo.genre)).slice(0, MORE_LIKE_THIS_FILMS_COUNT),
  }));
});

export {filmsData};
