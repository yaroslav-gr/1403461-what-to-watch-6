import React from 'react';
import {render} from '@testing-library/react';
import LoadingScreen from './loading-screen';

it(`LoadinScreen should render correctly`, () => {
  const {getByText} = render(
      <LoadingScreen/>
  );

  const divElement = getByText(`Loading...`);

  expect(divElement).toBeInTheDocument();
});
