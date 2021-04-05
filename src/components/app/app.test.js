import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute} from '../../const/const';
import App from './app';
import {fakeFilm, fakeFilms} from '../../test/test-mocks/test-mocks';

const mockStore = configureStore({});

jest.mock(`../main/main`, () => {
  const main = () => <div>This is mock Main</div>;
  main.displayName = `Main`;
  return {
    __esModule: true,
    default: () => {
      return main();
    }
  };
});

jest.mock(`../film/film-info-page`, () => {
  const filmInfoPage = () => <div>This is mock FilmInfoPage</div>;
  filmInfoPage.displayName = `FilmInfoPage`;
  return {
    __esModule: true,
    default: () => {
      return filmInfoPage();
    }
  };
});

jest.mock(`../add-review/add-review`, () => {
  const addReview = () => <div>This is mock AddReview</div>;
  addReview.displayName = `AddReview`;
  return {
    __esModule: true,
    default: () => {
      return addReview();
    }
  };
});

jest.mock(`../player/player`, () => {
  const player = () => <div>This is mock Player</div>;
  player.displayName = `Player`;
  return {
    __esModule: true,
    default: () => {
      return player();
    }
  };
});

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'Main' when user navigate to '/' url`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      FILMS: {
        films: fakeFilms,
        isDataLoaded: true
      },
    });

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/This is mock Main/i)).toBeInTheDocument();
  });

  it(`Render 'SingIn' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      FILMS: {
        films: fakeFilms,
        isDataLoaded: true
      },
      LOGIN: {
        isBadRequest: false
      }
    });

    history.push(AppRoute.LOGIN);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    screen.getAllByText(/Sign in/i).forEach((item) => expect(item).toBeInTheDocument());
  });

  it(`Render 'MyList' when user navigate to '/mylist' url`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      FILMS: {
        films: fakeFilms,
        isDataLoaded: true
      },
      LOGIN: {
        authorizationStatus: AuthorizationStatus.AUTH
      },
      USER: {
        userInfo: {}
      }
    });

    history.push(AppRoute.MY_LIST);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/My List/i)).toBeInTheDocument();
  });

  it(`Render 'FilmInfoPage' when user navigate to '/film/:id' url`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      FILMS: {
        films: fakeFilms,
        isDataLoaded: true,
      },
    });

    history.push(`${AppRoute.FILM_DETAILS}1`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/This is mock FilmInfoPage/i)).toBeInTheDocument();
  });

  it(`Render 'AddReview' when user navigate to '/films/:id/review' url`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      FILMS: {
        films: fakeFilms,
        isDataLoaded: true,
      },
      LOGIN: {
        authorizationStatus: AuthorizationStatus.AUTH
      },
    });

    history.push(`${AppRoute.FILM_DETAILS}${fakeFilm.id}/review`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/This is mock AddReview/i)).toBeInTheDocument();
  });

  it(`Render 'Player' when user navigate to '/player/:id' url`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      FILMS: {
        films: fakeFilms,
        isDataLoaded: true,
      },
    });

    history.push(`${AppRoute.PLAYER}1`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/This is mock Player/i)).toBeInTheDocument();
  });

  it(`Render 'NotFound' when user navigate to incorrect url`, () => {
    const incorrectUrl = `/incorrect`;
    const history = createMemoryHistory();
    const store = mockStore({
      FILMS: {
        films: fakeFilms,
        isDataLoaded: true,
      },
    });

    history.push(incorrectUrl);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/404 Page Not Found/i)).toBeInTheDocument();
  });

  it(`Render 'LoadingScreen' when data doesn't loaded`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      FILMS: {
        films: fakeFilms,
        isDataLoaded: false,
      },
    });

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it(`Render 'ErrorFilmsLoading' when data loading set error`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      FILMS: {
        films: fakeFilms,
        isDataLoaded: false,
        isErrorLoading: true
      },
    });

    store.dispatch = jest.fn();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Try to load again/i)).toBeInTheDocument();
  });
});
