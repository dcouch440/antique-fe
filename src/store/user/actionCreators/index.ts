import { ADD_USER_TO_STORE } from 'store/actions';
import { IUserInfo } from '../reducer/interfaces';

export const userLoggedIn = (payload: IUserInfo) => ({
  type: ADD_USER_TO_STORE,
  payload,
});
