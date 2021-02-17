import React from 'react';
import PropTypes from 'prop-types';

const FilmCard = (props) => {
  const {name, poster_image} = props;
  
  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={poster_image} alt={name} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{name}</a>
        </h3>
      </article>
    </React.Fragment>
  );
};

FilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  poster_image: PropTypes.string.isRequired
}

export default FilmCard;
