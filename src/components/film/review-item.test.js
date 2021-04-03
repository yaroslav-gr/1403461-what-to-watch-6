import React from 'react';
import {render} from '@testing-library/react';
import ReviewItem from './review-item';

it(`ReviewItem should render correctly`, () => {
  const fakeReview = {
    comment: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
    date: `2021-03-07T08:04:28.658Z`,
    id: 1,
    rating: 1.4,
    user: {
      id: 13,
      name: `Zak`,
    },
  };

  const {getByText} = render(
      <ReviewItem review={fakeReview}/>
  );

  const paragrafElementComment = getByText(`This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`);
  const citeElementAuthor = getByText(`Zak`);
  const timeElementDate = getByText(`February 7, 2021`);
  const divElementRating = getByText(`1,4`);

  expect(paragrafElementComment).toBeInTheDocument();
  expect(citeElementAuthor).toBeInTheDocument();
  expect(timeElementDate).toBeInTheDocument();
  expect(divElementRating).toBeInTheDocument();
});
