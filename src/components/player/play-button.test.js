import React from 'react';
import {render} from '@testing-library/react';
import PlayButton from './play-button';

it(`PlayButton should render correctly`, () => {
  const {getByText} = render(
      <PlayButton onHandlePlayClick={() => {}}/>
  );

  const spanElement = getByText(`Play`);

  expect(spanElement).toBeInTheDocument();
});
