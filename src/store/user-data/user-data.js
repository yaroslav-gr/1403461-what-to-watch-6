import {createReducer} from '@reduxjs/toolkit';
import {getUserInfo} from '../action';

const initialState = {
  userInfo: {},
};

const userData = createReducer(initialState, (builder) => {
  builder.addCase(getUserInfo, (state, action) => ({
    ...state,
    userInfo: action.payload,
  }));
});

export {userData};
