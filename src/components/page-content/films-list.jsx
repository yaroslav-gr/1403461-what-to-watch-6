import React, {useState, useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import FilmCard from '../page-content/film-card';
import {filmsListPropTypes} from '../../prop-types/prop-types';

const FilmsList = (props) => {
  const [currentFilmCard, setCurrentFilmCard] = useState({});
  const [isPlaying, setPlaying] = useState(false);
  const {filmListByGenre, countShowingFilms} = props;
  console.log(`FIlmLIst Rerender`);

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
        {filmListByGenre.slice(0, countShowingFilms).map((film) => <FilmCard key={film.id} film={film} isPlaying={isPlaying && currentFilmCard.id === film.id} handleHover={handleHover}/>)}
      </div>
    </React.Fragment>
  );
};

FilmsList.propTypes = filmsListPropTypes;

const mapStateToProps = (state) => ({
  filmListByGenre: state.filmListByGenre,
  countShowingFilms: state.countShowingFilms,
});

export default connect(mapStateToProps, null)(FilmsList);
