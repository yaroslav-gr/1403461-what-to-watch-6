import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import GuestHeader from './guest-header';

it(`GuestHeader should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByText} = render(
    <Router history={history}>
      <GuestHeader/>
    </Router>
  );

  const linkElement = getByText(`Sign in`);

  expect(linkElement).toBeInTheDocument();
});
