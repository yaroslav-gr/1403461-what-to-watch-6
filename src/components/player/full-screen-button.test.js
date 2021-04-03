import React from 'react';
import {render} from '@testing-library/react';
import FullScreenButton from './full-screen-button';

it(`FullScreenButton should render correctly`, () => {
  const {getByText} = render(
    <FullScreenButton onHandleFullScreenClick={() => {}}/>
  );

  const spanElement = getByText(`Full screen`);

  expect(spanElement).toBeInTheDocument();
});
