import {ActionCreator} from '../store/action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const/const';
import {filmsAdapter, userInfoAdapter} from '../utils/film';

export const fetchFilms = () => (dispatch, _getState, api) => {
  api.get(APIRoute.FILMS).
    then(({data}) => filmsAdapter(data)).
    then((data) => dispatch(ActionCreator.loadFilms(data))).
    catch((error) => dispatch(ActionCreator.setErrorLoading(error)));
};

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(APIRoute.LOGIN).then(({data}) => dispatch(ActionCreator.getUserInfo(userInfoAdapter(data)))).
    then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))).
    catch(() => {});
};

export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(APIRoute.LOGIN, {email, password}).
    then(({data}) => {
      dispatch(ActionCreator.getUserInfo(userInfoAdapter(data)));
      dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    }).
    catch(() => {
      dispatch(ActionCreator.setBadRequest());
    });
};
