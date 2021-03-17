import React from 'react';
import {connect} from 'react-redux';
import {setCurrentGenre, resetCountShowingFilms} from '../../store/action';
import {genresListPropTypes} from '../../prop-types/prop-types';

const GenresList = (props) => {
  const {films, activeGenre, setCurrentGenre, resetCountShowingFilms} = props;

  const createCurrentGenreList = () => {
    const genresList = new Set();
    films.map((film) => genresList.add(film.genre));
    const currentGenresList = Array.from(genresList);
    currentGenresList.unshift(`All genres`);

    return currentGenresList;
  };

  return (
    <React.Fragment>
      <ul className="catalog__genres-list">

        {createCurrentGenreList().map((item, index) => (
          <li key={item + index} className={`catalog__genres-item ` + (item === activeGenre ? `catalog__genres-item--active ` : ``)}>
            <a href="#" className="catalog__genres-link" onClick={(event) => {
              event.preventDefault();
              resetCountShowingFilms();
              setCurrentGenre(event.target.textContent);
            }}
            >{item}</a>
          </li>
        ))}

      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = ({FILMS}) => ({
  GENRES: FILMS.genres,
  films: FILMS.films,
  activeGenre: FILMS.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentGenre(genre) {
    dispatch(setCurrentGenre(genre));
  },

  resetCountShowingFilms() {
    dispatch(resetCountShowingFilms());
  }
});

GenresList.propTypes = genresListPropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
