import React from 'react'
import FilmTabs from './film-tabs';
import {render, screen} from '@testing-library/react';

jest.mock(`./film-tab-list`, () => {
  const filmTabList = () => <div>This is mock FilmTabList</div>;
  filmTabList.displayName = `FilmTabList`;
  return {
    __esModule: true,
    default: () => {
      return filmTabList();
    }
  };
});

const fakeFilm = {
  backgroundColor: `#AD9F8B`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Dardjeeling_Limited.jpg`,
  description: `A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.`,
  director: `Wes Anderson`,
  genre: `Adventure`,
  id: 3,
  isFavorite: true,
  name: `Dardjeeling Limited`,
  posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Dardjeeling_Limited.jpg`,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/dardjeeling_limited.jpg`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  rating: 3.6,
  released: 2007,
  runTime: 91,
  scoresCount: 165106,
  starring: [`Owen Wilson`, `Adrien Brody`, `Jason Schwartzman`],
  videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
};

const fakeReviews = [];

describe(`FilmTabs should work correctly`, () => {
  it(`FilmTabs should render correctly`, () => {
    render(
      <FilmTabs film={fakeFilm} reviews={fakeReviews}/>
    );

    expect(screen.getByText(/This is mock FilmTabList/i)).toBeInTheDocument();
  });
});
