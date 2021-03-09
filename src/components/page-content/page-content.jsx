import React from 'react';
import GenresList from './genres-list';
import ShowMoreButton from './show-more-button';
import FilmsList from './films-list';
import {pageContentPropTypes} from '../../prop-types/prop-types';
import {connect} from 'react-redux';

const PageContent = (props) => {
  const {films, countShowingFilms, filmListByGenre} = props;

  return (
    <React.Fragment>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList></GenresList>

          <FilmsList films={films}></FilmsList>

          <div className="catalog__more">

            {(filmListByGenre.length > countShowingFilms) && <ShowMoreButton />}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

PageContent.propTypes = pageContentPropTypes;

const mapStateToProps = (state) => ({
  films: state.films,
  filmListByGenre: state.filmListByGenre,
  countShowingFilms: state.countShowingFilms,
});


export default connect(mapStateToProps, null)(PageContent);
