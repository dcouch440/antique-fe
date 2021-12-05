import {
  ADD_PASSWORD_ERROR,
  TOGGLE_SIDEBAR_VISIBILITY,
  UPDATE_AUTH_TYPE,
  UPDATE_SIDEBAR_TYPE,
} from 'store/actions';
import { SIDEBAR_AUTH_TYPE_LOGIN, SIDEBAR_NAVIGATION } from 'constantVariables';

import { createReducer } from 'store/utils';

const initialState = {
  sidebarType: SIDEBAR_NAVIGATION,
  authType: SIDEBAR_AUTH_TYPE_LOGIN,
  sidebarVisibility: false,
  errors: {
    passwordConfirm: '',
  },
};

const reducer = createReducer(initialState, (state, payload) => ({
  // toggles between login/signup and navigation sidebars
  [UPDATE_SIDEBAR_TYPE]: () => ({
    ...state,
    sidebarType: payload,
  }),

  // toggle between login - signup
  [UPDATE_AUTH_TYPE]: () => ({
    ...state,
    authType: payload,
  }),

  // if passwords did not match on login
  [ADD_PASSWORD_ERROR]: () => ({
    ...state,
    errors: {
      ...state.error,
      passwordConfirm: payload,
    },
  }),

  // opens and closes sidebar
  [TOGGLE_SIDEBAR_VISIBILITY]: () => ({
    ...state,
    sidebarVisibility: !state.sidebarVisibility,
  }),
}));

export default reducer;
