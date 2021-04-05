import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmsList from './films-list';
import {fakeFilms} from '../../test/test-mocks/test-mocks';

let history;

jest.mock(`../video-player/mini-player`, () => {
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

  it(`FilmsList should render correctly`, () => {
    render(
        <Router history={history}>
          <FilmsList filmsForRender={fakeFilms}/>
        </Router>
    );

    screen.getAllByText(/Dardjeeling Limited/i).forEach((item) => expect(item).toBeInTheDocument());
  });
});
