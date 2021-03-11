import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PageContent from '../page-content/page-content';
import {ActionCreator} from '../../store/action';
import {mainPropTypes} from '../../prop-types/prop-types';

const Main = (props) => {
  const {film, resetFilmList} = props;

  useEffect(() => {
    resetFilmList();
  }, []);

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={film.posterImage} alt={film.name + ` poster`} width="218" height="327" />
            </div>

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
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageContent></PageContent>
    </React.Fragment>
  );
};

Main.propTypes = mainPropTypes;

const mapStateToProps = (state) => ({
  film: state.films[0],
});

const mapDispatchToProps = (dispatch) => ({
  resetFilmList() {
    dispatch(ActionCreator.resetFilmList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
