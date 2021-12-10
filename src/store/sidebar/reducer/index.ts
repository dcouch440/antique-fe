import {
  ADD_PASSWORD_ERROR,
  TOGGLE_SIDEBAR_VISIBILITY,
  UPDATE_AUTH_TYPE,
  UPDATE_SIDEBAR_SWELL_MENU_TYPE,
  UPDATE_SIDEBAR_TYPE,
} from 'store/actions';
import { SIDEBAR_AUTH_TYPE_LOGIN, SIDEBAR_NAVIGATION } from 'constantVariables';

import { AnyAction } from 'redux';
import { ISidebarState } from './interfaces';

const initialState: ISidebarState = {
  sidebarType: SIDEBAR_NAVIGATION,
  authType: SIDEBAR_AUTH_TYPE_LOGIN,
  sidebarVisibility: false,
  sidebarSwellMenuType: null,
  // move application errors to it's own reducer
  errors: {
    passwordConfirm: '',
  },
};

function reducer(
  state = initialState,
  { type, payload }: AnyAction
): ISidebarState {
  switch (type) {
    // toggles between login/signup and navigation sidebars
    case UPDATE_SIDEBAR_TYPE:
      return {
        ...state,
        sidebarType: payload,
      };
    // toggle between login - signup
    case UPDATE_AUTH_TYPE:
      return {
        ...state,
        authType: payload,
      };
    // if passwords did not match on login
    case ADD_PASSWORD_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          passwordConfirm: payload,
        },
      };
    // opens and closes sidebar
    case TOGGLE_SIDEBAR_VISIBILITY:
      return {
        ...state,
        sidebarVisibility: !state.sidebarVisibility,
      };
    case UPDATE_SIDEBAR_SWELL_MENU_TYPE:
      return {
        ...state,
        sidebarSwellMenuType: payload,
      };

    default:
      return state;
  }
}

export default reducer;
