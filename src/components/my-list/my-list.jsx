import React from 'react';
import {useSelector} from 'react-redux';
import FilmsList from '../common/films-list/films-list';
import UserHeader from '../common/headers/user-header/user-header';
import Footer from '../common/footer/footer';

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
        <Footer/>
      </div>
    </React.Fragment>
  );
};

export default MyList;
