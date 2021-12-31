import { ADD_USER_TO_STORE, REMOVE_USER_FROM_STORE } from 'store/actions';
import { ActionCreators, ActionCreatorsNPL } from 'store/types';

import { UserInfo } from './reducer';

export const userLoggedIn: ActionCreators<UserInfo> = (payload) => ({
  type: ADD_USER_TO_STORE,
  payload,
});

export const userLoggedOut: ActionCreatorsNPL = () => ({
  type: REMOVE_USER_FROM_STORE,
});
