import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import InputRadio from './input-radio';

it(`InputRadio should render correctly`, () => {
  const replayChangeHandle = jest.fn();
  replayChangeHandle.mockImplementation(() => {});

  render(
      <InputRadio index={5} onHandleChange={replayChangeHandle}/>
  );

  expect(screen.getByText(/Rating 5/i)).toBeInTheDocument();

  fireEvent.click(screen.getByTestId(`input-radio`));
  expect(replayChangeHandle).toHaveBeenCalled();
});
