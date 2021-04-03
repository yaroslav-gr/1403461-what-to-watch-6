import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Logo from './logo';

it(`Logo should render correctly`, () => {
  const fakeCurrentClasses = ``;
  const history = createMemoryHistory();
  const {getByText, getAllByText} = render(
      <Router history={history}>
        <Logo currentClasses={fakeCurrentClasses}/>
      </Router>
  );

  const spanElemetsW = getAllByText(`W`);
  const spanElemetT = getByText(`T`);

  spanElemetsW.forEach((element) => expect(element).toBeInTheDocument());
  expect(spanElemetT).toBeInTheDocument();
});
