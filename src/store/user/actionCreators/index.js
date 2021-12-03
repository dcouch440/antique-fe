const { ADD_USER_TO_STORE } = require('store/actions');

export const userCameOnline = (payload) => ({
  type: ADD_USER_TO_STORE,
  payload,
});
