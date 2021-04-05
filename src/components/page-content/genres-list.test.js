import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import GenresList from './genres-list';
import {fakeFilms} from '../../test/test-mocks/test-mocks';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

let store;
let history;
const mockStore = configureStore({});

describe(`GenresList should work correctly`, () => {
  history = createMemoryHistory();
  store = mockStore({
    FILMS: {
      films: fakeFilms,
      activeGenre: fakeFilms[0].genre
    },
  });

  it(`GenresList should render correctly`, () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <GenresList/>
        </Router>
      </Provider>
    );

    screen.getAllByText(/Adventure/i).forEach(item => expect(item).toBeInTheDocument());
  });
});
