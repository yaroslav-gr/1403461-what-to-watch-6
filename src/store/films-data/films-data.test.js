import {filmsData, initialState} from './films-data';
import {COUNT_FILMS_FOR_SHOWING} from '../../const/const';
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
  getMoreLikeThisFilms,
} from '../action';

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmsData(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should return new current genre and films by current genre, do not change genre if choosen all-genres and filmListByGenre set equal to films`, () => {
    const state = {
      films: [{genre: `All genres`}, {genre: `Thriller`}],
      activeGenre: `All genres`,
      filmListByGenre: [],
    };

    const newGenre = `Thriller`;

    expect(filmsData(state, setCurrentGenre(`All genres`))).toEqual({
      ...state,
      activeGenre: `All genres`,
      filmListByGenre: [{genre: `All genres`}, {genre: `Thriller`}],
    });

    expect(filmsData(state, setCurrentGenre(newGenre))).toEqual({
      ...state,
      activeGenre: newGenre,
      filmListByGenre: [{genre: `Thriller`}],
    });
  });

  it (`Reduser should return new countShowingFilms increased by COUNT_FILMS_FOR_SHOWING value`, () => {
    expect(filmsData({countShowingFilms: COUNT_FILMS_FOR_SHOWING}, handleShowMoreByButton())).toEqual({
      countShowingFilms: 16,
    });
  });

  it(`Reducer should return original value of countShowingFilms`, () => {
    expect(filmsData({countShowingFilms: COUNT_FILMS_FOR_SHOWING * 2}, resetCountShowingFilms())).toEqual({ countShowingFilms: 8 })
  });

  it(`Reduser should return reseted state`, () => {
    const state = {
      films: [{genre: `All genres`}, {genre: `Thriller`}, {genre: `Thriller`}],
      filmListByGenre: [{genre: `Thriller`}, {genre: `Thriller`}],
      activeGenre: `Thriller`,
      countShowingFilms: COUNT_FILMS_FOR_SHOWING * 2,
    };

    expect(filmsData(state, resetFilmList())).toEqual({
      ...state,
      filmListByGenre: state.films,
      activeGenre: `All genres`,
      countShowingFilms: 8,
    });
  });

  it(`Reducer should return new updated state`, () => {
    const loadedFilms = [{genre: `All genres`}, {genre: `Thriller`}, {genre: `Thriller`}];
    const state = {
      films: [],
      isDataLoaded: false,
      filmListByGenre: [],
    }

    expect(filmsData(state, loadFilms(loadedFilms))).toEqual({
      ...state,
      films: [{genre: `All genres`}, {genre: `Thriller`}, {genre: `Thriller`}],
      isDataLoaded: true,
      filmListByGenre: [{genre: `All genres`}, {genre: `Thriller`}, {genre: `Thriller`}],
    });
  });

  it(`Reducer should return new state with error info where errorMessage consists from error values`, () => {
    const state = {
      isErrorLoading: false,
      errorMessage: ``,
    };

    const error = {
      response: {
        status: 400,
        statusText: `error message`,
      }
    };

    expect(filmsData(state, setErrorLoading(error))).toEqual({
      isErrorLoading: true,
      errorMessage: `400 error message`,
    });
  });

  it(`Reducer should set new value for filmInfo`, () => {
    const info = {id: 1, name: `film name`};

    expect(filmsData({filmInfo: {}}, loadFilmInfo(info))).toEqual({filmInfo: info})
  });

  it(`Reducer shult set new status for loading status comments`, () => {
    const status = true;

    expect(filmsData({isErrorUploadComment: false}, setErrorUploadComment(status))).toEqual({isErrorUploadComment: status});
    expect(filmsData({uploadCommentStatus: false}, setUploadCommentStatus(status))).toEqual({uploadCommentStatus: status});
  });

  it(`Reducer should set new value of filmReviews`, () => {
    const reviews = [
      {
        id: 1,
        comment: `first`
      },
      {
        id: 2,
        comment: `second`
      }
    ];

    expect(filmsData({filmReviews: []}, loadFilmReviews(reviews))).toEqual({filmReviews: reviews});
  });

  it(`Reducer should return new value for moreLikeThisFilms with similar genre and excluding same one film, `, () => {
    const state = {
      films: [{id: 1, genre: `Comedy`}, {id: 2, genre: `Thriller`}, {id: 3, genre: `Drama`}],
      filmInfo: {id: 1, genre: `Thriller`},
      moreLikeThisFilms: []
    };

    expect(filmsData(state, getMoreLikeThisFilms())).toEqual({
      ...state,
      moreLikeThisFilms: [{id: 2, genre: `Thriller`}],
    });
  });
});