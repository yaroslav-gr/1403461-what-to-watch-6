import {ActionCreator} from '../store/action';
import {AuthorizationStatus} from '../const/const';
import {dataAdapter} from '../utils/film';

export const fetchFilms = () => (dispatch, _getState, api) => {
  api.get(`/films`).
    then(({data}) => dataAdapter(data)).
    then((data) => dispatch(ActionCreator.loadFilms(data)));
};

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(`/login`).
    then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))).
    catch(() => {});
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(`/login`, {email, password}).
    then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)));
};
