import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import NotFound from './not-found';

it(`NotFound should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <NotFound/>
      </Router>
  );

  expect(screen.getByText(/404 Page Not Found/i)).toBeInTheDocument();
  expect(screen.getByText(/© 2019 What to watch Ltd./i)).toBeInTheDocument();
});
