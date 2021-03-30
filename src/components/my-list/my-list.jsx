import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import FilmsList from '../page-content/films-list';
import UserHeader from '../header/user-header';
import {AppRoute} from '../../const/const';

const MyList = () => {
  const films = useSelector((state) => state.FILMS.films);
  const favoriteFilms = films.filter((film) => film.isFavorite);

  return (
    <React.Fragment>
      <div className="user-page">
        <UserHeader>
          <h1 className="page-title user-page__title">My list</h1>
        </UserHeader>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          {favoriteFilms.length ?
            <FilmsList filmsForRender={favoriteFilms}/> :
            <h3 style={{textAlign: `center`}}>You don&apos;t have any favorite movies yet.</h3>}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
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

export default MyList;
