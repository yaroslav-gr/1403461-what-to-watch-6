import React from 'react';
import FilmTabList from './film-tab-list';

const FilmTabs = () => {
  return (
    <React.Fragment>
      <div className="movie-card__desc">
        <FilmTabList/>   
      </div>
    </React.Fragment>
  );
};

export default FilmTabs;
