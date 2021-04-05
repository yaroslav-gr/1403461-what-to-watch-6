import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import FullScreenButton from './full-screen-button';

describe(`FullScreenButton should work correctly`, () => {
  it(`FullScreenButton should render correctly`, () => {
    render(
      <FullScreenButton onHandleFullScreenClick={() => {}}/>
    );

    expect(screen.getByText(`Full screen`)).toBeInTheDocument();
  });

  it(`FullScreenButton should call calback`, () => {
    const onHandleFullScreenClick = jest.fn();

    render(
      <FullScreenButton onHandleFullScreenClick={onHandleFullScreenClick}/>
    );

    fireEvent.click(screen.getByTestId(`fullscreen-button`));
    expect(onHandleFullScreenClick).toBeCalled();
  });
});
