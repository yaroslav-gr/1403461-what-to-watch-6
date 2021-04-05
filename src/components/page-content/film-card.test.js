import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmCard from './film-card';
import {fakeFilm} from '../../test/test-mocks/test-mocks';

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

describe(`FilmCard should work correctly`, () => {
  it(`FilmCard should render correctly`, () => {
    history = createMemoryHistory();
    const onHandleHover = jest.fn();
  
    render(
      <Router history={history}>
        <FilmCard film={fakeFilm} isPlaying={true} onHandleHover={onHandleHover}/>
      </Router>
    );
    
    expect(screen.getByText(/Dardjeeling Limited/i)).toBeInTheDocument();
    expect(screen.getByText(/This is mock VideoPlayer/i)).toBeInTheDocument();
  });

  it(`Handle should calls after user events`, () => {
    history = createMemoryHistory();
    const onHandleHover = jest.fn();
  
    render(
      <Router history={history}>
        <FilmCard film={fakeFilm} isPlaying={true} onHandleHover={onHandleHover}/>
      </Router>
    );

    fireEvent.mouseOver(screen.getByTestId(`article`));
    expect(onHandleHover).toBeCalled();
    fireEvent.mouseOut(screen.getByTestId(`article`));
    expect(onHandleHover).toBeCalled();
  });
});
