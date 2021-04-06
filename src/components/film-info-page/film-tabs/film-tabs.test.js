import React from 'react';
import FilmTabs from './film-tabs';
import {render, screen} from '@testing-library/react';
import {fakeFilm} from '../../../test/test-mocks/test-mocks';

jest.mock(`../film-tab-list/film-tab-list`, () => {
  const filmTabList = () => <div>This is mock FilmTabList</div>;
  filmTabList.displayName = `FilmTabList`;
  return {
    __esModule: true,
    default: () => {
      return filmTabList();
    }
  };
});

describe(`FilmTabs should work correctly`, () => {
  it(`FilmTabs should render correctly`, () => {
    const fakeReviews = [];

    render(
        <FilmTabs film={fakeFilm} reviews={fakeReviews}/>
    );

    expect(screen.getByText(/This is mock FilmTabList/i)).toBeInTheDocument();
  });
});
