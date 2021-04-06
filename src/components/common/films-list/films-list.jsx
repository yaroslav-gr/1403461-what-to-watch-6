import React, {useState, useEffect, useCallback} from 'react';
import FilmCard from '../page-content/film-card';
import {filmsPropTypes} from '../../../prop-types/prop-types';

const FilmsList = ({filmsForRender}) => {
  const [currentFilmCard, setCurrentFilmCard] = useState({});
  const [isPlaying, setPlaying] = useState(false);

  const handleHover = useCallback((film) => {
    setCurrentFilmCard(film);
    setPlaying(false);
  }, []);

  let timeOutId;

  useEffect(() => {
    if (currentFilmCard) {
      timeOutId = setTimeout(() => {
        setPlaying(true);
      }, 1000);
    }

    return () => timeOutId && clearTimeout(timeOutId);
  }, [currentFilmCard]);

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {filmsForRender.map((film) =>
          <FilmCard
            key={film.id}
            film={film}
            isPlaying={isPlaying && currentFilmCard.id === film.id}
            onHandleHover={handleHover}/>)}
      </div>
    </React.Fragment>
  );
};

FilmsList.propTypes = {
  filmsForRender: filmsPropTypes.films,
};

export default FilmsList;
