import { ADD_USER_TO_STORE } from 'store/actions';

export const userCameOnline = (payload) => ({
  type: ADD_USER_TO_STORE,
  payload,
});
