import React from 'react';
import {render} from '@testing-library/react';
import FilmReviews from './film-reviews';

it(`FilmReviews should render correctly`, () => {
  const {getByText} = render(
    <FilmReviews reviews={[]}/>
  );

  const headerElement = getByText(`No any reviews yet.`);

  expect(headerElement).toBeInTheDocument();
});
