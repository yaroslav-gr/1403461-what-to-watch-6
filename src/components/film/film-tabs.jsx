import React, {useState} from 'react';
import FilmTabList from './film-tab-list';
import FilmOverview from './film-overview';
import FilmReviews from './film-reviews';
import FilmDetails from './film-details';
import {Tabs} from '../../const/const';
import {filmPropTypes} from '../../prop-types/prop-types';

const FilmTabs = ({film, reviews}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabs = Object.values(Tabs);

  const handleChangeTab = (index) => setActiveTabIndex(index);

  const getTabContent = (index) => {
    switch (tabs[index]) {
      case Tabs.OVERVIEW:
        return <FilmOverview film={film} />;
      case Tabs.REVIEWS:
        return <FilmReviews reviews={reviews} />;
      case Tabs.DETAILS:
        return <FilmDetails film={film} />;
    }
    return null;
  };

  return (
    <React.Fragment>
      <div className="movie-card__desc">
        <FilmTabList
          tabs={tabs}
          onHandleChangeTab={handleChangeTab}
          activeTabIndex={activeTabIndex}/>

        {getTabContent(activeTabIndex)}
      </div>
    </React.Fragment>
  );
};

FilmTabs.propTypes = filmPropTypes;

export default FilmTabs;
