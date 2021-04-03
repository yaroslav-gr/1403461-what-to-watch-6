import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import NotFound from './not-found';

it(`NotFound should render correctly`, () => {
  const history = createMemoryHistory();

  const {getByText} = render(
    <Router history={history}>
      <NotFound/>
    </Router>
  );

  const headerElement = getByText(`404 Page Not Found`);
  const paragrafElement = getByText(`© 2019 What to watch Ltd.`);

  expect(headerElement).toBeInTheDocument();
  expect(paragrafElement).toBeInTheDocument();
});
