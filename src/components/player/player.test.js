import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Player from './player';
import {fakeFilm} from '../../test/test-mocks/test-mocks';
import {act} from 'react-dom/test-utils';

describe(`Player should work correctly`, () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
    window.HTMLMediaElement.prototype.requestFullscreen = () => {};
  });

  it(`Player should render correctly`, () => {
    render(
        <Player film={fakeFilm}/>
    );

    expect(screen.getByTestId(`video-player`)).toBeInTheDocument();
    expect(screen.getByText(/Transpotting/i)).toBeInTheDocument();
    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });

  it(`Player should play video when data is loaded`, () => {
    render(
        <Player film={fakeFilm}/>
    );

    const videoElement = screen.getByTestId(`video-player`);

    act(() => {
      fireEvent(videoElement, new Event(`canplaythrough`));
    });

    expect(screen.getByTestId(`pause-button`)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId(`pause-button`));
    expect(screen.getByTestId(`play-button`)).toBeInTheDocument();
  });
});
