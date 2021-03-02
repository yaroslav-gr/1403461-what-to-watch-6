import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const GenresList = (props) => {
  const {films, activeGenre, setCurrentGenre} = props;

  const createCurrentGenreList = function() {
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
          <li key={item + index} className={'catalog__genres-item ' + (item === activeGenre ? 'catalog__genres-item--active ' : '')}>
            <a href="#" className="catalog__genres-link" onClick={(event) => {
              event.preventDefault();
              setCurrentGenre(event.target.textContent);
            }}
            >{item}</a>
          </li>
        ))}

      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  GENRES: state.genres,
  films: state.films,
  activeGenre: state.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentGenre(genre) {
    dispatch(ActionCreator.setCurrentGenre(genre))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
