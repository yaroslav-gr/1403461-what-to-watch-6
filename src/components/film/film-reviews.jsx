import React from 'react';
import ReviewItem from './review-item';
import {filmReviewsPropTypes} from '../../prop-types/prop-types';

const FilmReviews = ({reviews}) => {
  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {(reviews.slice(0, 3)).map((review) => <ReviewItem review={review} key={review.id}/>)}
        </div>

        <div className="movie-card__reviews-col">
          {(reviews.slice(3, 6)).map((review) => <ReviewItem review={review} key={review.id}/>)}
        </div>
      </div>
    </React.Fragment>
  );
};

FilmReviews.propTypes = filmReviewsPropTypes;

export default FilmReviews;
