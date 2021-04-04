import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import InputRadio from './input-radio';

it(`InputRadio should render correctly`, () => {
  const replayChangeHandle = jest.fn();
  replayChangeHandle.mockImplementation(() => {});

  render(
      <InputRadio index={5} onHandleChange={replayChangeHandle}/>
  );

  const labelElement = screen.getByText(`Rating 5`);
  expect(labelElement).toBeInTheDocument();

  fireEvent.click(screen.getByTestId(`input-radio`));
  expect(replayChangeHandle).toHaveBeenCalled()
});
