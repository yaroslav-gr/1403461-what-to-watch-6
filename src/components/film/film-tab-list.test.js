import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmTabList from './film-tab-list';

it(`FilmTabList should render correctly`, () => {
  const history = createMemoryHistory();
  const fakeTabs = [`Overview`, `Details`, `Reviews`];
  const fakeTabIndex = 0;

  const {getByText} = render(
    <Router history={history}>
      <FilmTabList tabs={fakeTabs} onHandleChangeTab={() => {}} activeTabIndex={fakeTabIndex}/>
    </Router>
  );

  const linkElementOverview = getByText(`Overview`);
  const linkElementDetails = getByText(`Details`);
  const linkElementReviews = getByText(`Reviews`);

  expect(linkElementOverview).toBeInTheDocument();
  expect(linkElementDetails).toBeInTheDocument();
  expect(linkElementReviews).toBeInTheDocument();
});
