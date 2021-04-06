import {Months} from '../const/const';

export const formatRunTime = (time) => {
  if (time / 60 > 0) {
    const hours = Math.trunc(time / 60);
    const minutes = ((time / 60 - hours) * 60).toFixed(0);
    return `${hours}h ${minutes}m`;
  } else {
    return `0h ${time}m`;
  }
};

export const formatPlayerRunTime = (time) => {
  if (time / 3600 > 0) {
    const hours = Math.trunc(time / 3600);
    const minutes = ((time / 3600 - hours) * 60);
    const seconds = (minutes - Math.trunc(minutes)) * 60;
    return `${hours}:${Math.trunc(minutes) < 10 ? `0${Math.trunc(minutes)}` : Math.trunc(minutes)}:${Math.trunc(seconds) < 10 ? `0${Math.trunc(seconds)}` : Math.trunc(seconds)}`;
  } else if (time / 60 < 60) {
    const minutes = time / 60;
    const seconds = (minutes - Math.trunc(minutes)) * 60;
    return `0:${Math.trunc(minutes) < 10 ? `0${Math.trunc(minutes)}` : Math.trunc(minutes)}:${Math.trunc(seconds) < 10 ? `0${Math.trunc(seconds)}` : Math.trunc(seconds)}`;
  } else {
    return `0 : 0 : ${Math.trunc(time) < 10 ? `0${Math.trunc(time)}` : Math.trunc(time)}`;
  }
};

export const formatDate = (dateFromReview) => {
  const date = new Date(dateFromReview);
  const month = Months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const formatedDate = `${month} ${day}, ${year}`;
  return formatedDate;
};

export const dataAdapter = (data) => {
  const newData = {};
  const dataKeys = Object.keys(data);
  const dataValues = Object.values(data);
  dataKeys.map((key, index) => {
    newData[key.replace(/_\w/g, (m) => m[1].toUpperCase())] = dataValues[index];
  });

  return newData;
};

export const filmsAdapter = (films) => {
  const adaptedFilms = [];
  films.map((film) => {
    adaptedFilms.push(dataAdapter(film));
  });
  return adaptedFilms;
};
