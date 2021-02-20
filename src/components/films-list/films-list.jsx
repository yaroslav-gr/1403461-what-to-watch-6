import React, {useState} from 'react';
import FilmCard from '../film-card/film-card';
import {filmsPropTypes} from '../../prop-types/prop-types';


const FilmsList = (props) => {
  const [currentFilmCard, setCurrentFilmCard] = useState({});
  const {films} = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {films.map((film) => <FilmCard key={film.id} id={film.id} name={film.name} posterImage={film.posterImage} setCurrentFilmCard={() => {
          setCurrentFilmCard(film);
        }} />)}
      </div>
    </React.Fragment>
  );
};

FilmsList.propTypes = filmsPropTypes;

export default FilmsList;
