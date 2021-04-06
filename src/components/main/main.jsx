import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PageContent from '../page-content/page-content';
import GuestHeader from '../common/headers/guest-header/guest-header';
import UserHeader from '../common/headers/user-header/user-header';
import {redirectToRoute, resetFilmList} from '../../store/action';
import {AppRoute, AuthorizationStatus} from '../../const/const';
import RemoveFavoriteButton from '../common/remove-favorite-button/remove-favorite-button';
import AddFavoriteButton from '../common/add-favorite-button/add-favorite-button';

const Main = () => {
  const film = useSelector((state) => state.FILMS.films[0]);
  const authorizationStatus = useSelector((state) => state.LOGIN.authorizationStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilmList());
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
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  onClick={() => dispatch(redirectToRoute(`${AppRoute.PLAYER}${film.id}`))}
                  className="btn btn--play movie-card__button"
                  type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {film.isFavorite ? <RemoveFavoriteButton id={film.id}/> : <AddFavoriteButton id={film.id}/>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageContent/>
    </React.Fragment>
  );
};

export default Main;
