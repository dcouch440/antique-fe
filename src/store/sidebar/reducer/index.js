import {
  ADD_PASSWORD_ERROR,
  SET_MENU_CLOSED,
  SET_MENU_SELECTED,
  TOGGLE_SIDEBAR_VISIBILITY,
  UPDATE_AUTH_TYPE,
  UPDATE_VERSION,
} from 'store/actions';
import { NO_MENU, SIDEBAR_NAVIGATION } from 'constantVariables';

import { createReducer } from 'store/utils';

const initialState = {
  sidebarVersion: SIDEBAR_NAVIGATION,
  authType: 'LOGIN',
  sidebarVisibility: true,
  selectedMenu: NO_MENU,
  errors: {
    passwordConfirm: '',
  },
};

const reducer = createReducer(initialState, (state, payload) => ({
  // toggles between login/signup and navigation sidebars
  [UPDATE_VERSION]: () => ({
    ...state,
    sidebarVersion: payload,
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

  // closes menu
  [SET_MENU_CLOSED]: () => ({
    ...state,
    selectedMenu: NO_MENU,
  }),

  // set the selected menu
  [SET_MENU_SELECTED]: () => ({
    ...state,
    selectedMenu: payload,
  }),
}));

export default reducer;
