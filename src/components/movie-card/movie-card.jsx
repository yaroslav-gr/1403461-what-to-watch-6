import React from 'react';

const MovieCard = (props) => {
  const {title, img} = props;

  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={img} alt={title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    </React.Fragment>
  );
};

export default MovieCard;
