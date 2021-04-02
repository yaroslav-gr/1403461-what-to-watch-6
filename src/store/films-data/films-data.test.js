import {filmsData, initialState} from './films-data';
import {COUNT_FILMS_FOR_SHOWING, APIRoute, AppRoute} from '../../const/const';
import {createAPI} from '../../services/api';
import {fetchFilmInfo, fetchFilmReviews, fetchFilms, postComment, toggleFavoriteFilm} from '../api-actions';
import MockAdapter from 'axios-mock-adapter';
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
  redirectToRoute,
} from '../action';

const api = createAPI(() => {});

describe(`Reducer 'filmsData' work correctly`, () => {
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

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilms();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, loadFilms([{fake: true}]));
      });
  });

  it(`Should make a correct API call to /films/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 5;
    const filmInfoLoader = fetchFilmInfo(id);

    apiMock
      .onGet(`${APIRoute.FILMS}/${id}`)
      .reply(200, {fake: true});

    return filmInfoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, loadFilmInfo({fake: true}));
        expect(dispatch).toHaveBeenNthCalledWith(2, getMoreLikeThisFilms());
      });
  });

  it(`Should make a correct API call to GET /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 5;
    const filmReviewsLoader = fetchFilmReviews(id);

    apiMock
      .onGet(`${APIRoute.COMMENTS}${id}`)
      .reply(200, [{fake: true}]);

    return filmReviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, loadFilmReviews([{fake: true}]));
      });
  });

  it(`Should make a correct API call to POST /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 5;
    const fakeReview = {
      rating: 5,
      comment: `comment`
    };
    const reviewLoader = postComment(fakeReview, id);

    apiMock
      .onPost(`${APIRoute.COMMENTS}${id}`)
      .reply(200);

    return reviewLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, setUploadCommentStatus(false));
        expect(dispatch).toHaveBeenNthCalledWith(2, redirectToRoute(`${AppRoute.FILM_DETAILS}${id}`));
      });
  });

  it(`Should make a correct API call to POST /favorite/:id/:status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 5;
    const newStatus = true;
    const favoriteStatusLoader = toggleFavoriteFilm(id, newStatus);
    
    apiMock
      .onPost(`${APIRoute.FAVORITE}${id}/${newStatus}`)
      .reply(200);

    return favoriteStatusLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, fetchFilms());
        expect(dispatch).toHaveBeenNthCalledWith(2, fetchFilmInfo(id));
      });
  });
});