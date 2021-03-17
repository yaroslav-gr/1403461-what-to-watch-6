import React from 'react';
import GenresList from './genres-list';
import ShowMoreButton from './show-more-button';
import FilmsList from './films-list';
import Footer from '../footer/footer';
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

        <Footer />
      </div>
    </React.Fragment>
  );
};

PageContent.propTypes = pageContentPropTypes;

const mapStateToProps = ({FILMS}) => ({
  films: FILMS.films,
  filmListByGenre: FILMS.filmListByGenre,
  countShowingFilms: FILMS.countShowingFilms,
});


export default connect(mapStateToProps, null)(PageContent);
