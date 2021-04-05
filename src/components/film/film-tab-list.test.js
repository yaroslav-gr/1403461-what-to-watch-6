import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmTabList from './film-tab-list';
import {fakeTabs} from '../../test/test-mocks/test-mocks';

it(`FilmTabList should render correctly`, () => {
  const history = createMemoryHistory();
  const fakeTabIndex = 0;

  render(
      <Router history={history}>
        <FilmTabList tabs={fakeTabs} onHandleChangeTab={() => {}} activeTabIndex={fakeTabIndex}/>
      </Router>
  );

  expect(screen.getByText(/Overview/i)).toBeInTheDocument();
  expect(screen.getByText(/Details/i)).toBeInTheDocument();
  expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
});
