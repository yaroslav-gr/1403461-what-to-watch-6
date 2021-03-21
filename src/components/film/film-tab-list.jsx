import React from 'react';
import {Link} from 'react-router-dom';

const FilmTabList = ({tabs, handleChangeTab, activeTabIndex}) => {

  const SetLiClass = (isActive) => {
    return isActive ? `movie-nav__item  movie-nav__item--active` : `movie-nav__item`;
  };

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">

          {tabs.map((tab, index) => (
            <li
            key={index}
            onClick={() => {handleChangeTab(index)}}
            className={SetLiClass(activeTabIndex === index)}>
              <Link to="#" className="movie-nav__link">{tab}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default FilmTabList;
