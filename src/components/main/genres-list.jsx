import React from 'react';
import {GENRES} from '../../const/const';


const GenresList = () => {
  return (
    <React.Fragment>
      <ul className="catalog__genres-list">
        {Object.keys(GENRES).map((item, index) => (
          <li key={GENRES[item] + index} className={'catalog__genres-item ' + (GENRES[item].isActive ? 'catalog__genres-item--active ' : '')}>
            <a href="#" className="catalog__genres-link">{GENRES[item].name}</a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default GenresList;
