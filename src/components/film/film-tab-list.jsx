import React from 'react';
import {Link} from 'react-router-dom';

const FilmTabList = () => {
  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className="movie-nav__item">
            <Link to="#" className="movie-nav__link">Overview</Link>
          </li>
          <li className="movie-nav__item movie-nav__item--active">
            <Link to={`/films/`} className="movie-nav__link">Details</Link>
          </li>
          <li className="movie-nav__item">
            <Link to="#" className="movie-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default FilmTabList;
