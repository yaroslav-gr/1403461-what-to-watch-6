import React from 'react';
import {FilmLevels} from '../../const/const';
import {filmPropTypes} from '../../prop-types/prop-types';

const FilmOverview = ({film}) => {

  const getFilmLevel = (rating) => {
    if (rating < 3) {
      return FilmLevels.BAD;
    }
    if (rating >= 3 && rating < 5) {
      return FilmLevels.NORMAL;
    }
    if (rating >= 5 && rating < 8) {
      return FilmLevels.GOOD;
    }
    if (rating >= 8 && rating < 10) {
      return FilmLevels.VERY_GOOD;
    }
    if (rating >= 10) {
      return FilmLevels.AWESOME;
    }
    return null;
  };

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getFilmLevel(film.rating)}</span>
          <span className="movie-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{film.description}</p>

        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

FilmOverview.propTypes = filmPropTypes;

export default FilmOverview;
