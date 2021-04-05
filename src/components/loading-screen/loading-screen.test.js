import React from 'react';
import {render, screen} from '@testing-library/react';
import LoadingScreen from './loading-screen';

it(`LoadinScreen should render correctly`, () => {
  render(
    <LoadingScreen/>
  );

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});
