import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import FilmCard from '../film-card/film-card';
import {filmsPropTypes} from '../../prop-types/prop-types';


const FilmsList = (props) => {
  const [currentFilmCard, setCurrentFilmCard] = useState({});
  const [isPlaying, setPlaying] = useState(false);
  const {films, activeGenre} = props;

  const handleHover = (film) => {
    setCurrentFilmCard(film);
    setPlaying(false);
  };

  const getCurrentFilms = () => {
    if (activeGenre === `All genres`) {
      return films;
    } else {
      const newFilmList = films.filter(film => film.genre === activeGenre);
      return newFilmList;
    }
  };

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
        {getCurrentFilms().map((film) => <FilmCard key={film.id} film={film} isPlaying={isPlaying && currentFilmCard.id === film.id} handleHover={handleHover}/>)}
      </div>
    </React.Fragment>
  );
};

FilmsList.propTypes = filmsPropTypes;

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
});

export default connect(mapStateToProps, null)(FilmsList);