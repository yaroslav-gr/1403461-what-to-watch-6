import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import PauseButton from './pause-button';

describe(`PauseButton should work correctly`, () => {
  it(`PauseButton should render correctly`, () => {
    render(
        <PauseButton onHandlePauseClick={() => {}}/>
    );

    expect(screen.getByTestId(`pause-button`)).toBeInTheDocument();
  });

  it(`PauseButton should call calback`, () => {
    const onHandlePauseClick = jest.fn();

    render(
        <PauseButton onHandlePauseClick={onHandlePauseClick}/>
    );

    fireEvent.click(screen.getByTestId(`pause-button`));
    expect(onHandlePauseClick).toBeCalled();
  });
});
