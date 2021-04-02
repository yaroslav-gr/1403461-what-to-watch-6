import {getUserInfo} from '../action';
import {userData, initialState} from './user-data';

describe(`Reducer 'userData' work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(userData(undefined, {})).toEqual(initialState);
  });

  it(`Reducer`, () => {
    const info = {
      id: 1,
      name: `user name`,
      email: `q@gmail.com`
    };

    expect(userData({userInfo: {}}, getUserInfo(info))).toEqual({userInfo: {
      id: 1,
      name: `user name`,
      email: `q@gmail.com`
    }});
  });
});