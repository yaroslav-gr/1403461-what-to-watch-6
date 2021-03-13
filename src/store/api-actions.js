import {ActionCreator} from '../store/action';
import {AuthorizationStatus} from '../const/const';
import {filmsAdapter, authInfoAdapter} from '../utils/film';

export const fetchFilms = () => (dispatch, _getState, api) => {
  api.get(`/films`).
    then(({data}) => filmsAdapter(data)).
    then((data) => dispatch(ActionCreator.loadFilms(data))).
    catch((error) => dispatch(ActionCreator.setErrorLoading(error)));
};

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(`/login`).then(({data}) => dispatch(ActionCreator.getAuthorInfo(authInfoAdapter(data)))).
    then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))).
    catch(() => {});
};

export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(`/login`, {email, password}).
    then(({data}) => {
      dispatch(ActionCreator.getAuthorInfo(authInfoAdapter(data)));
      dispatch(ActionCreator.redirectToRoute(`/`));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    }).
    catch((error) => {
      throw error;
    });
};
