export const fakeFilm = {
  backgroundColor: `#AD9F8B`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Dardjeeling_Limited.jpg`,
  description: `A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.`,
  director: `Wes Anderson`,
  genre: `Adventure`,
  id: 3,
  isFavorite: false,
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

export const fakeFilms = new Array(5).fill(fakeFilm);

export const fakeUserInfo = {
  email: `fake@gmail.com`,
  avatarUrl: `http://fake`
};

export const fakeTabs = [`Overview`, `Details`, `Reviews`];

export const fakeReview = {
  comment: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
  date: `2021-03-07T08:04:28.658Z`,
  id: 1,
  rating: 1.4,
  user: {
    id: 13,
    name: `Zak`,
  }
};
