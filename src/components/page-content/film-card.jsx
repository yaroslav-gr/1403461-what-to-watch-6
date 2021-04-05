import React from 'react';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/mini-player';
import {filmCardPropTypes} from '../../prop-types/prop-types';
import {AppRoute} from '../../const/const';

const FilmCard = ({film, isPlaying, onHandleHover}) => {
  return (
    <React.Fragment>
      <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onHandleHover(film)}
      onMouseOut={() => onHandleHover()}
      data-testid="article">
        <div className="small-movie-card__image">
          <VideoPlayer previewImage={film.previewImage} previewVideoLink={film.previewVideoLink} isPlaying={isPlaying}/>
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`${AppRoute.FILM_DETAILS}${film.id}`}>{film.name}</Link>
        </h3>
      </article>
    </React.Fragment>
  );
};

FilmCard.propTypes = filmCardPropTypes;

export default React.memo(FilmCard);
