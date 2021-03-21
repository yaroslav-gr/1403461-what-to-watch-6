import React, {useState} from 'react';
import FilmTabList from './film-tab-list';
import FilmOverview from './film-overview';
import FilmReviews from './film-reviews';
import FilmDetails from './film-details';
import {Tabs} from '../../const/const';

const FilmTabs = ({film}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabs = Object.values(Tabs);

  const handleChangeTab = (index) => setActiveTabIndex(index);

  const getTabContent = (index) => {
    switch (tabs[index]) {
      case Tabs.OVERVIEW:
        return <FilmOverview film={film} />;
      case Tabs.REVIEWS:
        return <FilmReviews film={film} />;
      case Tabs.DETAILS:
        return <FilmDetails film={film} />;  
    }
  };

  return (
    <React.Fragment>
      <div className="movie-card__desc">
        <FilmTabList
        tabs={tabs}
        handleChangeTab={handleChangeTab}
        activeTabIndex={activeTabIndex}/>

        {getTabContent(activeTabIndex)}
      </div>
    </React.Fragment>
  );
};

export default FilmTabs;
