import React from 'react';
import {render, screen} from '@testing-library/react';
import ErrorMessage from './error-message';

it(`NotFoundScreen should render correctly`, () => {
  render(
      <ErrorMessage/>
  );

  expect(screen.getByText(`An error occurred loading the comment. Try again or later.`)).toBeInTheDocument();
});
