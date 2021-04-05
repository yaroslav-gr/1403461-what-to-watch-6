import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import PlayButton from './play-button';

describe(`PlayButton should work correctly`, () => {
  it(`PlayButton should render correctly`, () => {
    render(
      <PlayButton onHandlePlayClick={() => {}}/>
    );

    expect(screen.getByTestId(`play-button`)).toBeInTheDocument();
  });

  it(`PlayButton should call calback`, () => {
    const onHandlePlayClick = jest.fn();

    render(
      <PlayButton onHandlePlayClick={onHandlePlayClick}/>
    );

    fireEvent.click(screen.getByTestId(`play-button`));
    expect(onHandlePlayClick).toBeCalled();
  });
});
