import React from 'react';
import {render} from '@testing-library/react';
import PauseButton from './pause-button';

it(`PauseButton should render correctly`, () => {
  const {getByText} = render(
      <PauseButton onHandlePauseClick={() => {}}/>
  );

  const spanElement = getByText(`Pause`);

  expect(spanElement).toBeInTheDocument();
});
