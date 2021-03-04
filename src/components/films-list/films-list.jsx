import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import FilmCard from '../film-card/film-card';
import {filmsListPropTypes} from '../../prop-types/prop-types';


const FilmsList = (props) => {
  const [currentFilmCard, setCurrentFilmCard] = useState({});
  const [isPlaying, setPlaying] = useState(false);
  const {filmListByGenre, countFilmsByButton} = props;

  const handleHover = (film) => {
    setCurrentFilmCard(film);
    setPlaying(false);
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
        {filmListByGenre.slice(0, countFilmsByButton).map((film) => <FilmCard key={film.id} film={film} isPlaying={isPlaying && currentFilmCard.id === film.id} handleHover={handleHover}/>)}
      </div>
    </React.Fragment>
  );
};

FilmsList.propTypes = filmsListPropTypes;

const mapStateToProps = (state) => ({
  filmListByGenre: state.filmListByGenre,
  countFilmsByButton: state.countFilmsByButton,
});

export default connect(mapStateToProps, null)(FilmsList);
