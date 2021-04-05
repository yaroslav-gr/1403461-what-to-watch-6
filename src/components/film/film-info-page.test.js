import React from 'react'
import FilmInfoPage from './film-info-page';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const/const';
import thunk from 'redux-thunk';
import {Router} from 'react-router';
import {createMemoryHistory} from 'history';
import {createAPI} from '../../services/api';

const api = createAPI(() => {});
const middleware = [thunk.withExtraArgument(api)];

let store;
let history;
const mockStore = configureStore(middleware);

const fakeFilm = {
  backgroundColor: `#AD9F8B`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Dardjeeling_Limited.jpg`,
  description: `A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.`,
  director: `Wes Anderson`,
  genre: `Adventure`,
  id: 3,
  isFavorite: true,
  name: `Dardjeeling Limited`,
  posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Dardjeeling_Limited.jpg`,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/dardjeeling_limited.jpg`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  rating: 3.6,
  released: 2007,
  runTime: 91,
  scoresCount: 165106,
  starring: [`Owen Wilson`, `Adrien Brody`, `Jason Schwartzman`],
  videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
};

jest.mock(`../header/guest-header`, () => {
  const guestHeader = () => <div>This is mock Header</div>;
  guestHeader.displayName = `GuestHeader`;
  return {
    __esModule: true,
    default: () => {
      return guestHeader();
    }
  };
});

jest.mock(`../header/user-header`, () => {
  const userHeader = () => <div>This is mock Header</div>;
  userHeader.displayName = `UserHeader`;
  return {
    __esModule: true,
    default: () => {
      return userHeader();
    }
  };
});

jest.mock(`./film-tabs`, () =>{
  const filmTabs = () => <div>This is mock Tabs</div>;
  filmTabs.displayName = `FilmTabs`;
  return {
    __esModule: true,
    default: () => {
      return filmTabs();
    }
  };
});

jest.mock(`../page-content/films-list`, () => {
  const filmList = () => <div>This is mock FilmList</div>;
  filmList.displayName = `FilmsList`;
  return {
    __esModule: true,
    default: () => {
      return filmList();
    }
  };
});

jest.mock(`../loading-screen/loading-screen`, () => {
  const loadingScreen = () => <div>This is mock LoadingScreen</div>;
  loadingScreen.displayName = `LoadingScreen`;
  return {
    __esModule: true,
    default: () => {
      return loadingScreen();
    }
  };
});

describe(`FilmInfoPage should work correctly`, () => {  
  history = createMemoryHistory();
  beforeEach(() => {
    store = mockStore({
      LOGIN: {
        authorizationStatus: AuthorizationStatus.AUTH
      },
      FILMS: {
        filmInfo: fakeFilm,
        moreLikeThisFilms: []
      },
    })
  });


  it(`FilmInfoPage should render correctly`, () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <FilmInfoPage id={fakeFilm.id}/>
        </Router>
      </Provider>
    );

    expect(screen.getByText(/Dardjeeling Limited/i)).toBeInTheDocument();
    expect(screen.getByText(/This is mock Header/i)).toBeInTheDocument();
  });

  it(`FilmInfoPage should render LoadingScrenn if filmInfo is loading`, () => {
    const fakeId = 5;

    render(
      <Provider store={store}>
        <Router history={history}>
          <FilmInfoPage id={fakeId}/>
        </Router>
      </Provider>
    );

    expect(screen.getByText(/This is mock LoadingScreen/i)).toBeInTheDocument();

  })
});