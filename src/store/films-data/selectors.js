import {NameSpace} from '../root-reducer';

export const getFilms = (state) => state[NameSpace.FILMS].films;
export const getActiveGenre = (state) => state[NameSpace.FILMS].activeGenre;
export const getFilmListByGenre = (state) => state[NameSpace.FILMS].filmListByGenre;
export const getCountShowingFilms = (state) => state[NameSpace.FILMS].countShowingFilms;
export const getIsDataLoaded = (state) => state[NameSpace.FILMS].isDataLoaded;
export const getIsErrorLoading = (state) => state[NameSpace.FILMS].isErrorLoading;
export const getErrorMessage = (state) => state[NameSpace].FILMS.errorMessage;
