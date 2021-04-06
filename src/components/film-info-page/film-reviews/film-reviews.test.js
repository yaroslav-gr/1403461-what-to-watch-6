import React from 'react';
import {render, screen} from '@testing-library/react';
import FilmReviews from '../film-reviews';

it(`FilmReviews should render correctly`, () => {
  render(
      <FilmReviews reviews={[]}/>
  );

  expect(screen.getByText(/No any reviews yet./i)).toBeInTheDocument();
});
