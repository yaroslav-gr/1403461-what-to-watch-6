import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Logo from './logo';

it(`Logo should render correctly`, () => {
  const fakeCurrentClasses = ``;
  const history = createMemoryHistory();
  render(
      <Router history={history}>
        <Logo currentClasses={fakeCurrentClasses}/>
      </Router>
  );

  screen.getAllByText(/W/i).forEach((element) => expect(element).toBeInTheDocument());
  expect(screen.getByText(/T/i)).toBeInTheDocument();
});
