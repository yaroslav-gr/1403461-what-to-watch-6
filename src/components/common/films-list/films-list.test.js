import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmsList from './films-list';
import {fakeFilm} from '../../../test/test-mocks/test-mocks';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

let history;
let store;
const mockStore = configureStore({});

jest.mock(`../../mini-player/mini-player`, () => {
  const videoPlayer = () => <div>This is mock VideoPlayer</div>;
  videoPlayer.displayName = `VideoPlayer`;
  return {
    __esModule: true,
    default: () => {
      return videoPlayer();
    }
  };
});

describe(`FilmsList should work correctly`, () => {
  history = createMemoryHistory();
  store = mockStore({});

  it(`FilmsList should render correctly`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmsList filmsForRender={[fakeFilm]}/>
          </Router>
        </Provider>
    );

    screen.getAllByText(/Dardjeeling Limited/i).forEach((item) => expect(item).toBeInTheDocument());
  });
});
