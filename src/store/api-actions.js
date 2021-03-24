import {loadFilms, loadFilmInfo, setErrorLoading, getUserInfo, requireAuthorization, redirectToRoute, setBadRequest} from '../store/action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const/const';
import {filmAdapter, filmsAdapter, userInfoAdapter} from '../utils/film';

export const fetchFilms = () => (dispatch, _getState, api) => {
  api.get(APIRoute.FILMS).
    then(({data}) => filmsAdapter(data)).
    then((data) => dispatch(loadFilms(data))).
    catch((error) => dispatch(setErrorLoading(error)));
};

export const fetchFilmInfo = (id) => (dispatch, _getState, api) => {
  api.get(APIRoute.FILMS + `/` + id).
    then(({data}) => filmAdapter(data)).
    then((data) => dispatch(loadFilmInfo(data)));
};

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(APIRoute.LOGIN).then(({data}) => dispatch(getUserInfo(userInfoAdapter(data)))).
    then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH))).
    catch(() => {});
};

export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(APIRoute.LOGIN, {email, password}).
    then(({data}) => {
      dispatch(getUserInfo(userInfoAdapter(data)));
      dispatch(redirectToRoute(AppRoute.ROOT));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    }).
    catch(() => {
      dispatch(setBadRequest());
    });
};

export const postComment = ({rating, comment}, id) => (dispatch, _getState, api) => {
  api.post((APIRoute.COMMENTS + id), {rating, comment})
}
