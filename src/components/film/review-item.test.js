import React from 'react';
import {render, screen} from '@testing-library/react';
import ReviewItem from './review-item';
import {fakeReview} from '../../test/test-mocks/test-mocks';

it(`ReviewItem should render correctly`, () => {
  render(
      <ReviewItem review={fakeReview}/>
  );

  expect(screen.getByText(/This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted./i)).toBeInTheDocument();
  expect(screen.getByText(/Zak/i)).toBeInTheDocument();
  expect(screen.getByText(/February 7, 2021/i)).toBeInTheDocument();
  expect(screen.getByText(/1,4/i)).toBeInTheDocument();
});
