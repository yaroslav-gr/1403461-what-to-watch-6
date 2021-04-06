import React from 'react';
import {render, screen} from '@testing-library/react';
import FilmDetails from './film-details';
import {fakeFilm} from '../../../test/test-mocks/test-mocks';

it(`FilmDetails should render correctly`, () => {
  render(
      <FilmDetails film={fakeFilm}/>
  );

  expect(screen.getByText(/Director/i)).toBeInTheDocument();
  expect(screen.getByText(/Wes Anderson/i)).toBeInTheDocument();
  expect(screen.getByText(/Starring/i)).toBeInTheDocument();
  expect(screen.getByText(/Owen Wilson, Adrien Brody, Jason Schwartzman/i)).toBeInTheDocument();
  expect(screen.getByText(/Run Time/i)).toBeInTheDocument();
  expect(screen.getByText(/1h 31m/i)).toBeInTheDocument();
  expect(screen.getByText(/Genre/i)).toBeInTheDocument();
  expect(screen.getByText(/Adventure/i)).toBeInTheDocument();
  expect(screen.getByText(/Released/i)).toBeInTheDocument();
  expect(screen.getByText(/2007/i)).toBeInTheDocument();
});
