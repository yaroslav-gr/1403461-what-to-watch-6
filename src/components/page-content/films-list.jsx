import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import FilmCard from '../page-content/film-card';
import {filmsPropTypes} from '../../prop-types/prop-types';
import {fetchFilmInfo} from '../../store/api-actions';

const FilmsList = ({filmsForRender}) => {
  const [currentFilmCard, setCurrentFilmCard] = useState({});
  const [isPlaying, setPlaying] = useState(false);

  const dispatch = useDispatch();

  const handleHover = useCallback((film) => {
    setCurrentFilmCard(film);
    setPlaying(false);
  }, []);

  const handleTitleClick = useCallback((id) => {
    dispatch(fetchFilmInfo(id));
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
        handleHover={handleHover}
        handleTitleClick={handleTitleClick}/>)}
      </div>
    </React.Fragment>
  );
};

FilmsList.propTypes = {
  filmsForRender: filmsPropTypes.films,
};

export default FilmsList;
