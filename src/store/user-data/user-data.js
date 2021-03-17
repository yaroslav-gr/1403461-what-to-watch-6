import {ActionType} from '../action';

const initialState = {
  userInfo: {},
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_AUTHOR_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
  }
  return state;
};

export {userData};
