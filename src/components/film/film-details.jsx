import React from 'react';
import {Link} from 'react-router-dom';
import FilmsList from '../films-list/films-list';
import {filmDetailsPropTypes} from '../../prop-types/prop-types';
import {formatRunTime} from '../../utils/film';

const FilmDetails = (props) => {
  const {film, films} = props;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.posterImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/` + film.id + `/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.posterImage} alt={film.name + `poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item">
                    <Link to="#" className="movie-nav__link">Overview</Link>
                  </li>
                  <li className="movie-nav__item movie-nav__item--active">
                    <Link to={`/films/` + film.id} className="movie-nav__link">Details</Link>
                  </li>
                  <li className="movie-nav__item">
                    <Link to="#" className="movie-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

              <div className="movie-card__text movie-card__row">
                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Director</strong>
                    <span className="movie-card__details-value">{film.director}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Starring</strong>
                    <span className="movie-card__details-value">
                      {film.starring.join(`, \n`)}
                    </span>
                  </p>
                </div>

                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Run Time</strong>
                    <span className="movie-card__details-value">{formatRunTime(film.runTime)}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Genre</strong>
                    <span className="movie-card__details-value">{film.genre}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Released</strong>
                    <span className="movie-card__details-value">{film.released}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={films}></FilmsList>

        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

FilmDetails.propTypes = filmDetailsPropTypes;

export default FilmDetails;
