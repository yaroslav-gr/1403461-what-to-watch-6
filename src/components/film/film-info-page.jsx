import React from 'react';
import {Link} from 'react-router-dom';
import FilmsList from '../page-content/films-list';
import UserHeader from '../header/user-header';
import GuestHeader from '../header/guest-header';
import Footer from '../footer/footer';
import FilmTabs from './film-tabs';
import FilmReviews from './film-reviews';
import {filmDetailsPropTypes} from '../../prop-types/prop-types';
import {formatRunTime} from '../../utils/film';
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../const/const';

const FilmDetails = ({id, films}) => {
  const {authorizationStatus} = useSelector((state) => state.LOGIN);
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

            <FilmTabs/>
            
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList filmsForRender={films}></FilmsList>

        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

FilmDetails.propTypes = filmDetailsPropTypes;

export default FilmDetails;
