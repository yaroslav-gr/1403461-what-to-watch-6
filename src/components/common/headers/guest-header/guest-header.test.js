import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import GuestHeader from './guest-header';

it(`GuestHeader should render correctly`, () => {
  const history = createMemoryHistory();
  render(
      <Router history={history}>
        <GuestHeader/>
      </Router>
  );

  expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
});
