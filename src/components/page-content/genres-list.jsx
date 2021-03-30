import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {setCurrentGenre, resetCountShowingFilms} from '../../store/action';

const GenresList = () => {
  const films = useSelector((state) => state.FILMS.films);
  const activeGenre = useSelector((state) => state.FILMS.activeGenre);

  const dispatch = useDispatch();

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
            <Link to="#" className="catalog__genres-link" onClick={(event) => {
              event.preventDefault();
              dispatch(resetCountShowingFilms());
              dispatch(setCurrentGenre(event.target.textContent));
            }}
            >{item}</Link>
          </li>
        ))}

      </ul>
    </React.Fragment>
  );
};

export default GenresList;
