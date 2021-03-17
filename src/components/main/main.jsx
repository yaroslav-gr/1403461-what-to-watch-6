import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PageContent from '../page-content/page-content';
import GuestHeader from '../header/guest-header';
import UserHeader from '../header/user-header';
import {ActionCreator} from '../../store/action';
import {mainPropTypes} from '../../prop-types/prop-types';
import {AuthorizationStatus} from '../../const/const';

const Main = (props) => {
  const {film, resetFilmList, authorizationStatus} = props;

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

        {authorizationStatus === AuthorizationStatus.AUTH ? <UserHeader/> : <GuestHeader/>}

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

const mapStateToProps = ({FILMS, LOGIN}) => ({
  film: FILMS.films[0],
  authorizationStatus: LOGIN.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  resetFilmList() {
    dispatch(ActionCreator.resetFilmList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
