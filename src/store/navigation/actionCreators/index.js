const { UPDATE_PATH } = require('store/actions');

export const navigationPathUpdated = (payload) => ({
  type: UPDATE_PATH,
  payload,
});
