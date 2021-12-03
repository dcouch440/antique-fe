import {
  ADD_PASSWORD_ERROR,
  UPDATE_AUTH_TYPE,
  UPDATE_VERSION,
} from 'store/actions';

import { createReducer } from 'store/utils';

const initialState = {
  sidebarVersion: 'NAVIGATION',
  authType: 'LOGIN',
  errors: {
    passwordConfirm: '',
  },
};

const reducer = createReducer(initialState, (state, payload) => ({
  [UPDATE_VERSION]: () => ({
    ...state,
    sidebarVersion: payload,
  }),
  [UPDATE_AUTH_TYPE]: () => ({
    ...state,
    authType: payload,
  }),
  [ADD_PASSWORD_ERROR]: () => ({
    ...state,
    errors: {
      ...state.error,
      passwordConfirm: payload,
    },
  }),
}));

export default reducer;
