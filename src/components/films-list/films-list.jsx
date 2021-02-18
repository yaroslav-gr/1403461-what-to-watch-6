import React from 'react';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';
import {filmsPropTypes} from '../../prop-types/film-prop-types';


const FilmsList = (props) => {
  const {films} = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {films.map((film, i) => <FilmCard key={film.id} name={film.name} poster_image={film.poster_image} />)}
      </div>
    </React.Fragment>
  )
};

FilmsList.propTypes = filmsPropTypes;

export default FilmsList;