import React from 'react';
import {Link} from 'react-router-dom';
import {filmCardPropTypes} from '../../prop-types/prop-types';

const FilmCard = (props) => {
  const {id, name, poster_image, setCurrentFilmCard} = props;
  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card" onMouseOver={setCurrentFilmCard}>
        <div className="small-movie-card__image">
          <img src={poster_image} alt={name} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={"/films/" + id} >{name}</Link>
        </h3>
      </article>
    </React.Fragment>
  );
};

FilmCard.propTypes = filmCardPropTypes

export default FilmCard;
