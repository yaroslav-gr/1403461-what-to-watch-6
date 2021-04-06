import React from 'react';
import {formatDate} from '../../utils/film';
import {reviewItemPropTypes} from '../../prop-types/prop-types';

const ReviewItem = ({review}) => {
  return (
    <React.Fragment>
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{review.comment}</p>

          <footer className="review__details">
            <cite className="review__author">{review.user.name}</cite>
            <time className="review__date" dateTime="2016-12-24">{formatDate(review.date)}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{String(review.rating).replace(`.`, `,`)}</div>
      </div>
    </React.Fragment>
  );
};

ReviewItem.propTypes = reviewItemPropTypes;

export default ReviewItem;
