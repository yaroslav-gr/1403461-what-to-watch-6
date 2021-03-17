import {AuthorizationStatus} from '../../const/const';
import {ActionType} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isBadRequest: false,
};

const loginData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SET_BAD_REQUEST:
      return {
        ...state,
        isBadRequest: true,
      };
  }
  return state;
};

export {loginData};
