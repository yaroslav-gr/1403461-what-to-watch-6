import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmCard from './film-card';
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

describe(`FilmCard should work correctly`, () => {
  beforeAll(() => {
    history = createMemoryHistory();
    store = mockStore({});
  });

  it(`FilmCard should render correctly`, () => {
    const onHandleHover = jest.fn();
    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmCard film={fakeFilm} isPlaying={true} onHandleHover={onHandleHover}/>
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Dardjeeling Limited/i)).toBeInTheDocument();
    expect(screen.getByText(/This is mock VideoPlayer/i)).toBeInTheDocument();
  });

  it(`Handle should calls after user events`, () => {
    const onHandleHover = jest.fn();

    render(
        <Provider store={store}>
          <Router history={history}>
            <FilmCard film={fakeFilm} isPlaying={true} onHandleHover={onHandleHover}/>
          </Router>
        </Provider>
    );

    fireEvent.mouseOver(screen.getByTestId(`article`));
    expect(onHandleHover).toBeCalled();
    fireEvent.mouseOut(screen.getByTestId(`article`));
    expect(onHandleHover).toBeCalled();
  });
});
