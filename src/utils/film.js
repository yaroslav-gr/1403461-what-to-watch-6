export const formatRunTime = function (time) {
  if (time / 60 > 0) {
    const hours = Math.trunc(time / 60);
    const minutes = ((time / 60 - hours) * 60).toFixed(0);
    return `${hours}h ${minutes}m`;
  } else {
    return `0h ${time}m`;
  }
};

export const dataAdapter = (films) => {
  const adaptedFilms = [];
  films.map((film) => {
    const newFilm = {};
    const filmKeys = Object.keys(film);
    const filmValues = Object.values(film);
    filmKeys.map((key, index) => {
      newFilm[key.replace(/_\w/g, (m) => m[1].toUpperCase())] = filmValues[index];
    });
    adaptedFilms.push(newFilm);
  });
  return adaptedFilms;
};
