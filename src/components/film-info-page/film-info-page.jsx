import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import FilmsList from '../common/films-list/films-list';
import UserHeader from '../common/headers/user-header/user-header';
import GuestHeader from '../common/headers/guest-header/guest-header';
import Footer from '../common/footer/footer';
import FilmTabs from './film-tabs/film-tabs';
import LoadingScreen from '../loading-screen/loading-screen';
import AddFavoriteButton from '../common/add-favorite-button/add-favorite-button';
import RemoveFavoriteButton from '../common/remove-favorite-button/remove-favorite-button';
import {filmInfoPagePropTypes} from '../../prop-types/prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../const/const';
import {fetchFilmReviews, fetchFilmInfo} from '../../store/api-actions';
import {getMoreLikeThisFilms, redirectToRoute} from '../../store/action';

const FilmInfoPage = ({id}) => {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector((state) => state.LOGIN.authorizationStatus);
  const filmInfo = useSelector((state) => state.FILMS.filmInfo);
  const filmReviews = useSelector((state) => state.FILMS.filmReviews);
  const moreLikeThisFilms = useSelector((state) => state.FILMS.moreLikeThisFilms);

  useEffect(() => {
    dispatch(fetchFilmInfo(id));
    dispatch(fetchFilmReviews(id));
    dispatch(getMoreLikeThisFilms());
  }, [id]);

  if (filmInfo.id !== id) {
    return <LoadingScreen/>;
  }

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor: filmInfo.backgroundColor}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={filmInfo.backgroundImage} alt={filmInfo.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          {authorizationStatus === AuthorizationStatus.AUTH ? <UserHeader/> : <GuestHeader/>}

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{filmInfo.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{filmInfo.genre}</span>
                <span className="movie-card__year">{filmInfo.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  onClick={() => dispatch(redirectToRoute(`${AppRoute.PLAYER}${filmInfo.id}`))}
                  className="btn btn--play movie-card__button"
                  type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {filmInfo.isFavorite ? <RemoveFavoriteButton id={filmInfo.id}/> : <AddFavoriteButton id={filmInfo.id}/>}
                {authorizationStatus === AuthorizationStatus.AUTH ? <Link to={`${AppRoute.FILM_DETAILS}${filmInfo.id}/review`} className="btn movie-card__button">Add review</Link> : ``}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={filmInfo.posterImage} alt={`${filmInfo.name} poster`} width="218" height="327" />
            </div>

            <FilmTabs film={filmInfo} reviews={filmReviews}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">{moreLikeThisFilms.length !== 0 ? `More like this` : `There are no similar movies :(`}</h2>

          <FilmsList filmsForRender={moreLikeThisFilms}/>

        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

FilmInfoPage.propTypes = filmInfoPagePropTypes;

export default React.memo(FilmInfoPage);
