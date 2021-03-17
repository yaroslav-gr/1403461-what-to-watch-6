import React from 'react';
import {Link} from 'react-router-dom';
import FilmsList from '../page-content/films-list';
import UserHeader from '../header/user-header';
import GuestHeader from '../header/guest-header';
import Footer from '../footer/footer';
import {filmDetailsPropTypes} from '../../prop-types/prop-types';
import {formatRunTime} from '../../utils/film';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../store/login-data/selectors';
import {AuthorizationStatus} from '../../const/const';

const FilmDetails = ({id, films, authorizationStatus}) => {
  const currentFilm = films.find((film) => film.id === id);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor: currentFilm.backgroundColor}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          {authorizationStatus === AuthorizationStatus.AUTH ? <UserHeader/> : <GuestHeader/>}

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{currentFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{currentFilm.genre}</span>
                <span className="movie-card__year">{currentFilm.released}</span>
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
                <Link to={`/films/` + currentFilm.id + `/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={currentFilm.posterImage} alt={currentFilm.name + `poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item">
                    <Link to="#" className="movie-nav__link">Overview</Link>
                  </li>
                  <li className="movie-nav__item movie-nav__item--active">
                    <Link to={`/films/` + currentFilm.id} className="movie-nav__link">Details</Link>
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
                    <span className="movie-card__details-value">{currentFilm.director}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Starring</strong>
                    <span className="movie-card__details-value">
                      {currentFilm.starring.join(`, \n`)}
                    </span>
                  </p>
                </div>

                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Run Time</strong>
                    <span className="movie-card__details-value">{formatRunTime(currentFilm.runTime)}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Genre</strong>
                    <span className="movie-card__details-value">{currentFilm.genre}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Released</strong>
                    <span className="movie-card__details-value">{currentFilm.released}</span>
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
        <Footer />
      </div>
    </React.Fragment>
  );
};

FilmDetails.propTypes = filmDetailsPropTypes;

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps, null)(FilmDetails);
