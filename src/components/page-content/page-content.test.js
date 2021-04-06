import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PageContent from './page-content';
import configureStore from 'redux-mock-store';
import {fakeFilms} from '../../test/test-mocks/test-mocks';
import {Provider} from 'react-redux';
import {COUNT_FILMS_FOR_SHOWING} from '../../const/const';

let store;
let history;
const mockStore = configureStore({});

jest.mock(`../common/films-list/films-list`, () => {
  const filmsList = () => <div>This is mock FilmsList</div>;
  filmsList.displayName = `FilmsList`;
  return {
    __esModule: true,
    default: () => {
      return filmsList();
    }
  };
});

jest.mock(`./genres-list/genres-list`, () => {
  const genresList = () => <div>This is mock GenresList</div>;
  genresList.displayName = `GenresList`;
  return {
    __esModule: true,
    default: () => {
      return genresList();
    }
  };
});

describe(`PageContent shuold work correctly`, () => {
  history = createMemoryHistory();
  store = mockStore({
    FILMS: {
      countShowingFilms: COUNT_FILMS_FOR_SHOWING,
      filmListByGenre: fakeFilms
    }
  });

  it(`PageContent should render correctly`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <PageContent/>
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.getByText(/This is mock FilmsList/i)).toBeInTheDocument();
    expect(screen.getByText(/This is mock GenresList/i)).toBeInTheDocument();
  });
});
