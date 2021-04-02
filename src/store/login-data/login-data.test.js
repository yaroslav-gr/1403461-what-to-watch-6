import {setBadRequest, requireAuthorization, getUserInfo, redirectToRoute} from '../action';
import {loginData, initialState} from './login-data';
import {APIRoute, AppRoute, AuthorizationStatus} from '../../const/const';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {checkAuth, login} from '../api-actions';

const api = createAPI(() => {});

describe(`Reducer 'loginData' work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(loginData(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should return new status for isBadRequest value`, () => {
    const status = true;

    expect(loginData({isBadRequest: false}, setBadRequest(status))).toEqual({isBadRequest: true});
  });

  it(`Reducer`, () => {
    expect(loginData({authorizationStatus: AuthorizationStatus.NO_AUTH}, requireAuthorization(AuthorizationStatus.AUTH))).toEqual({authorizationStatus: `AUTH`});
  });

});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to GET /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, {fake: true});

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, getUserInfo({fake: true}));
        expect(dispatch).toHaveBeenNthCalledWith(2, requireAuthorization(AuthorizationStatus.AUTH));
      });
  });

  it(`Should make a correct API call to POST /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeFormInfo = {
      email: `q@mail.com`,
      password: `qwerty`
    };
    const loginLoader = login(fakeFormInfo);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, {fake: true});

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, getUserInfo({fake: true}));
        expect(dispatch).toHaveBeenNthCalledWith(2, redirectToRoute(AppRoute.ROOT));
        expect(dispatch).toHaveBeenNthCalledWith(3, requireAuthorization(AuthorizationStatus.AUTH));
      });
  });
});