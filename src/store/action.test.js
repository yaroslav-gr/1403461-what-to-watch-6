import {
  setCurrentGenre,
  handleShowMoreByButton,
  resetCountShowingFilms,
  resetFilmList,
  requireAuthorization,
  loadFilms,
  loadFilmInfo,
  setErrorLoading,
  getUserInfo,
  redirectToRoute,
  setBadRequest,
  setUploadCommentStatus,
  setErrorUploadComment,
  loadFilmReviews,
  getMoreLikeThisFilms,
  ActionType
} from './action';

import {AuthorizationStatus} from '../const/const';

describe(`Action creators work correctly`, () => {
  it (`Action creator setCurrentGenre returns correct action`, () => {
    const newGenre = `genre`;

    const expectedAction = {
      type: ActionType.SET_CURRENT_GENRE,
      payload: newGenre,
    };

    expect(setCurrentGenre(newGenre)).toEqual(expectedAction);
  });

  it(`Action creator handleShowMoreByButton returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SHOW_MORE_BY_BYTTON_CLICK,
    };

    expect(handleShowMoreByButton()).toEqual(expectedAction);
  });

  it(`Action creator resetCountShowingFilms returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RESET_COUNT_SHOWING_FILMS,
    };

    expect(resetCountShowingFilms()).toEqual(expectedAction);
  });

  it(`Action creator resetFilmList returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RESET_FILM_LIST,
    };

    expect(resetFilmList()).toEqual(expectedAction);
  });

  it(`Action creator requireAuthorization returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(requireAuthorization(AuthorizationStatus.AUTH)).toEqual(expectedAction);
  });

  it(`Action creator loadFilms returns correct action`, () => {
    const films = [
      {
        id: 1,
        name: `first`,
      },
      {
        id: 2,
        name: `second`
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };

    expect(loadFilms(films)).toEqual(expectedAction);
  });

  it(`Action creator loadFilmInfo returns correct action`, () => {
    const filmInfo = {
      id: 1,
      name: `filmName`,
      genre: `thriller`,
    };

    const expectedAction = {
      type: ActionType.LOAD_FILM_INFO,
      payload: filmInfo,
    };

    expect(loadFilmInfo(filmInfo)).toEqual(expectedAction);
  });

  it(`Action creator setErrorLoading returns correct action`, () => {
    const isError = false;

    const expectedAction = {
      type: ActionType.ERROR_LOADING,
      payload: false,
    };

    expect(setErrorLoading(isError)).toEqual(expectedAction);
  });

  it(`Action creator getUserInfo returns correct action`, () => {
    const userInfo = {
      id: 1,
      name: `person`,
      email: `person@gmail.com`,
    };

    const expectedAction = {
      type: ActionType.GET_AUTHOR_INFO,
      payload: userInfo,
    };

    expect(getUserInfo(userInfo)).toEqual(expectedAction);
  });

  it(`Action creator redirectToRoute returns correct action`, () => {
    const url = `http://google.com`;

    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `http://google.com`,
    };

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it(`Action creator setBadRequest returns correct action`, () => {
    const isBadRequest = true;

    const expectedAction = {
      type: ActionType.SET_BAD_REQUEST,
      payload: true,
    };

    expect(setBadRequest(isBadRequest)).toEqual(expectedAction);
  });

  it(`Action creator setUploadCommentStatus returns correct action`, () => {
    const uploadCommentStatus = true;

    const expectedAction = {
      type: ActionType.SET_STATUS_UPLOAD_COMMENT,
      payload: true,
    };

    expect(setUploadCommentStatus(uploadCommentStatus)).toEqual(expectedAction);
  });

  it(`Action creator setErrorUploadComment returns correct action`, () => {
    const isError = true;

    const expectedAction = {
      type: ActionType.SET_ERROR_UPLOAD_COMMENT,
      payload: true,
    };

    expect(setErrorUploadComment(isError)).toEqual(expectedAction);
  });

  it(`Action creator loadFilmReviews returns correct action`, () => {
    const reviews = [
      {
        id: 1,
        author: `first`,
        comment: `comment`,
      },
      {
        id: 2,
        author: `second`,
        comment: `comment`,
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_FILM_REVIEWS,
      payload: reviews,
    };

    expect(loadFilmReviews(reviews)).toEqual(expectedAction);
  });

  it(`Action creator getMoreLikeThisFilms returns correct action`, () => {
    const expectedAction = {
      type: ActionType.GET_MORE_LIKE_THIS_FILMS,
    };

    expect(getMoreLikeThisFilms()).toEqual(expectedAction);
  });
 });
 