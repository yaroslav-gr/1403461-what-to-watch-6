import React from 'react';
import {render} from '@testing-library/react';
import InputRadio from './input-radio';

it(`InputRadio should render correctly`, () => {
  const {getByText} = render(
    <InputRadio index={5} onHandleChange={() => {}}/>
  );

  const labelElement = getByText(`Rating 5`);

  expect(labelElement).toBeInTheDocument();
});
