export const COUNT_FILMS_FOR_SHOWING = 8;
export const MORE_LIKE_THIS_FILMS_COUNT = 4;

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  LOGIN: `/login`,
  ROOT: `/`,
  MY_LIST: `/mylist`,
  FILM_DETAILS: `/films/`,
  ADD_REVIEW: `/films/:id/review`,
  PLAYER: `/player/`,
  ERROR: `/error`,
  NOT_FOUND: `/not-found`,
};

export const APIRoute = {
  COMMENTS: `/comments/`,
  FILMS: `/films`,
  LOGIN: `/login`,
  FAVORITE: `/favorite/`,
};

export const Tabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const FilmLevels = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

export const Months = {
  1: `January`,
  2: `February`,
  3: `March`,
  4: `April`,
  5: `May`,
  6: `June`,
  7: `July`,
  8: `August`,
  9: `September`,
  10: `October`,
  11: `November`,
  12: `December`,
};

export const StatusFavorite = {
  ADD: 1,
  REMOVE: 0,
};

export const LogoClassNames = {
  HEADER: `logo__link`,
  FOOTER: `logo__link logo__link--light`,
};
