import { ADD_USER_TO_STORE } from 'store/actions';
import { ActionCreators } from 'store/types';
import { UserInfo } from '../reducer/interfaces';

export const userLoggedIn: ActionCreators<UserInfo> = (payload) => ({
    type: ADD_USER_TO_STORE,
    payload,
});
