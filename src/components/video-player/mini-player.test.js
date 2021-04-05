import React from 'react';
import {render, screen} from '@testing-library/react';
import VideoPlayer from './mini-player';

describe(`VideoPlayer should work correctly`, () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
    window.HTMLMediaElement.prototype.load = () => {};
  });

  it(`VideoPlayer should render correctly`, () => {
    const mockPath = `mock-path`;

    render(
      <VideoPlayer previewImage={``} previewVideoLink={mockPath} isPlaying={true}/>
    );

    expect(screen.getByTestId(`video-player`)).toBeInTheDocument()
  });
});
