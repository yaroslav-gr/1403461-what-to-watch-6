import React from 'react';
import {render} from '@testing-library/react';
import FilmDetails from './film-details';

it(`FilmDetails should render correctly`, () => {
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
  const {getByText} = render(
      <FilmDetails film={fakeFilm}/>
  );

  const strongElementDirector = getByText(`Director`);
  const spanElementDirector = getByText(`Wes Anderson`);
  const strongElementStarrin = getByText(`Starring`);
  const spanElementStarrin = getByText(`Owen Wilson, Adrien Brody, Jason Schwartzman`);
  const strongElementRunTime = getByText(`Run Time`);
  const spanElementRunTime = getByText(`1h 31m`);
  const strongElemetnGenre = getByText(`Genre`);
  const spanElementGenre = getByText(`Adventure`);
  const strongElementReleased = getByText(`Released`);
  const spanElementReleased = getByText(`2007`);

  expect(strongElementDirector).toBeInTheDocument();
  expect(spanElementDirector).toBeInTheDocument();
  expect(strongElementStarrin).toBeInTheDocument();
  expect(spanElementStarrin).toBeInTheDocument();
  expect(strongElementRunTime).toBeInTheDocument();
  expect(spanElementRunTime).toBeInTheDocument();
  expect(strongElemetnGenre).toBeInTheDocument();
  expect(spanElementGenre).toBeInTheDocument();
  expect(strongElementReleased).toBeInTheDocument();
  expect(spanElementReleased).toBeInTheDocument();
});
