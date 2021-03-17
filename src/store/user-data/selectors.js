import {NameSpace} from '../root-reducer';

export const getUserInfo = (state) => state[NameSpace.USER].userInfo;
