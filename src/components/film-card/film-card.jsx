import React from 'react';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {filmCardPropTypes} from '../../prop-types/prop-types';

const FilmCard = (props) => {
  const {film, isPlaying, handleHover} = props;
  
  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card" onMouseOver={() => handleHover(film)} onMouseOut={() => handleHover()}>
        <div className="small-movie-card__image">
          <VideoPlayer previewImage={film.previewImage} previewVideoLink={film.previewVideoLink} isPlaying={isPlaying}>
          </VideoPlayer>
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/` + film.id} >{film.name}</Link>
        </h3>
      </article>
    </React.Fragment>
  );
};

FilmCard.propTypes = filmCardPropTypes;

export default FilmCard;
