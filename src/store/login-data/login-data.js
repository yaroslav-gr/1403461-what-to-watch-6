import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const/const';
import {setBadRequest, requireAuthorization} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isBadRequest: false,
};

const loginData = createReducer(initialState, (builder) => {
  builder.addCase(setBadRequest, (state, action) => {
    state.isBadRequest = action.payload;
  });
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
});

export {loginData};
