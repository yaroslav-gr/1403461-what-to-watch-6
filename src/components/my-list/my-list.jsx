import React from 'react';
import {Link} from 'react-router-dom';
import FilmsList from '../page-content/films-list';
import UserHeader from '../header/user-header';
import {connect} from 'react-redux';
import {AppRoute} from '../../const/const';

const MyList = () => {
  return (
    <React.Fragment>
      <div className="user-page">
        <UserHeader>
          <h1 className="page-title user-page__title">My list</h1>
        </UserHeader>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmsList/>
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

export default connect(null, null)(MyList);
