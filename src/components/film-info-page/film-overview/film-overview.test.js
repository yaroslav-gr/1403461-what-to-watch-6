import React from 'react';
import {render, screen} from '@testing-library/react';
import FilmOverview from './film-overview';
import {fakeFilm} from '../../../test/test-mocks/test-mocks';

it(`FilmOverview should render correctly`, () => {
  render(
      <FilmOverview film={fakeFilm}/>
  );

  expect(screen.getByText(/3.6/i)).toBeInTheDocument();
  expect(screen.getByText(/Normal/i)).toBeInTheDocument();
  expect(screen.getByText(/165106 ratings/i)).toBeInTheDocument();
  expect(screen.getByText(/A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other./i)).toBeInTheDocument();
  expect(screen.getByText(/Director: Wes Anderson/i)).toBeInTheDocument();
  expect(screen.getByText(/Starring: Owen Wilson, Adrien Brody, Jason Schwartzman/i)).toBeInTheDocument();
});
