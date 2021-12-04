import {
  ADD_PASSWORD_ERROR,
  SET_MENU_CLOSED,
  SET_MENU_SELECTED,
  TOGGLE_SIDEBAR_VISIBILITY,
  UPDATE_AUTH_TYPE,
  UPDATE_VERSION,
} from 'store/actions';

export const versionChanged = (payload) => ({
  type: UPDATE_VERSION,
  payload,
});

export const authTypeChanged = (payload) => ({
  type: UPDATE_AUTH_TYPE,
  payload,
});

export const passwordConfirmErrorOccurred = (payload) => ({
  type: ADD_PASSWORD_ERROR,
  payload,
});

export const visibilityToggled = () => ({
  type: TOGGLE_SIDEBAR_VISIBILITY,
});

export const menuClosed = () => ({
  type: SET_MENU_CLOSED,
});

export const menuSelected = (payload) => ({
  type: SET_MENU_SELECTED,
  payload,
});
