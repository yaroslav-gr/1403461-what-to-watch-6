import React from 'react';
import GenresList from './genres-list';
import ShowMoreButton from './show-more-button';
import FilmsList from './films-list';
import Footer from '../footer/footer';
import {getFilms, getFilmListByGenre, getCountShowingFilms} from '../../store/films-data/selectors';
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

const mapStateToProps = (state) => ({
  films: getFilms(state),
  filmListByGenre: getFilmListByGenre(state),
  countShowingFilms: getCountShowingFilms(state),
});


export default connect(mapStateToProps, null)(PageContent);
