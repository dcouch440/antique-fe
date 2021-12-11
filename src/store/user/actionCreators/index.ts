import { ADD_USER_TO_STORE } from 'store/actions';
import { ActionCreators } from 'store/types';
import { IUserInfo } from '../reducer/interfaces';

export const userLoggedIn: ActionCreators<IUserInfo> = (payload) => ({
  type: ADD_USER_TO_STORE,
  payload,
});
