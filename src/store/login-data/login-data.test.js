import {setBadRequest, requireAuthorization} from '../action';
import {loginData, initialState} from './login-data';
import {AuthorizationStatus} from '../../const/const';

describe(`Reducer work correctly`, () => {
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