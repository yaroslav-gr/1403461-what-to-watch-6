import React, {useState, useEffect} from 'react';
import FilmCard from '../film-card/film-card';
import {filmsPropTypes} from '../../prop-types/prop-types';


const FilmsList = (props) => {
  const [currentFilmCard, setCurrentFilmCard] = useState({});
  const [isPlaying, setPlaying] = useState(false);
  const {films} = props;

  const handleHover = (film) => {
    setCurrentFilmCard(film);
    setPlaying(false);
  };

  let timeOutId;

  useEffect(() => {
    if (currentFilmCard) {
      timeOutId = setTimeout(() => {setPlaying(true);}, 1000)
    }

    return () => {
      timeOutId && clearTimeout(timeOutId);
    };
  }, [currentFilmCard]);

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {films.map((film) => <FilmCard key={film.id} film={film} isPlaying={isPlaying && currentFilmCard.id === film.id} handleHover={handleHover}/>)}
      </div>
    </React.Fragment>
  );
};

FilmsList.propTypes = filmsPropTypes;

export default FilmsList;
