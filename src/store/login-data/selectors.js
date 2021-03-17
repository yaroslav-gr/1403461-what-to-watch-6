import {NameSpace} from '../root-reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.LOGIN].authorizationStatus;
export const getIsBadRequest = (state) => state[NameSpace.LOGIN].isBadRequest;
