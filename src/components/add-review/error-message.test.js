import React from 'react';
import {render} from '@testing-library/react';
import ErrorMessage from './error-message';

it(`NotFoundScreen should render correctly`, () => {
  const {getByText} = render(
      <ErrorMessage/>
  );

  const titleElement = getByText(`An error occurred loading the comment. Try again or later.`);

  expect(titleElement).toBeInTheDocument();
});
