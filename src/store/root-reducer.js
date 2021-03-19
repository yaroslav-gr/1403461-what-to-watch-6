import {combineReducers} from 'redux';
import {filmsData} from './films-data/films-data';
import {loginData} from './login-data/login-data';
import {userData} from './user-data/user-data';

export const NameSpace = {
  FILMS: `FILMS`,
  LOGIN: `LOGIN`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.FILMS]: filmsData,
  [NameSpace.LOGIN]: loginData,
  [NameSpace.USER]: userData,
});

