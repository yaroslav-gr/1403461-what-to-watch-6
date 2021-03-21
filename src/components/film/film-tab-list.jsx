import React from 'react';
import {Link} from 'react-router-dom';
import {filmTabListPropTypes} from '../../prop-types/prop-types';

const FilmTabList = ({tabs, handleChangeTab, activeTabIndex}) => {

  const setLiClass = (isActive) => {
    return isActive ? `movie-nav__item  movie-nav__item--active` : `movie-nav__item`;
  };

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">

          {tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => handleChangeTab(index)}
              className={setLiClass(activeTabIndex === index)}>
              <Link to="#" className="movie-nav__link">{tab}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

FilmTabList.propTypes = filmTabListPropTypes;

export default FilmTabList;