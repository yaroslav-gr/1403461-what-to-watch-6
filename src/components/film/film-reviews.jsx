import React from 'react';
import ReviewItem from './review-item';
import {filmReviewsPropTypes} from '../../prop-types/prop-types';

const FilmReviews = ({reviews}) => {

  if (reviews.length === 0) {
    return <h2 style={{textAlign: `center`, color: `#252525`}}>No any reviews yet.</h2>
  }

  const firstColReviews = reviews.filter((review) => review.id % 2 !== 0);
  const secondColReviews = reviews.filter((review) => review.id % 2 === 0);

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {firstColReviews.map((review) => <ReviewItem review={review} key={review.id}/>)}
        </div>

        <div className="movie-card__reviews-col">
          {secondColReviews.map((review) => <ReviewItem review={review} key={review.id}/>)}
        </div>
      </div>
    </React.Fragment>
  );
};

FilmReviews.propTypes = filmReviewsPropTypes;

export default FilmReviews;
