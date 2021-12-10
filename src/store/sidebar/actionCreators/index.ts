import {
  ADD_PASSWORD_ERROR,
  TOGGLE_SIDEBAR_VISIBILITY,
  UPDATE_AUTH_TYPE,
  UPDATE_SIDEBAR_SWELL_MENU_TYPE,
  UPDATE_SIDEBAR_TYPE,
} from 'store/actions';
import { ActionCreators, ActionCreatorsNPL } from 'store/types';
import {
  SidebarAuthType,
  SidebarSwellMenuType,
  SidebarType,
} from '../reducer/types';

/**
 * Inner menu selector, menu, nav, messages, etc..
 */
export const sidebarTypeChanged: ActionCreators<SidebarType> = (payload) => ({
  type: UPDATE_SIDEBAR_TYPE,
  payload,
});

/**
 * For Password and login Toggle.
 */
export const authTypeChanged: ActionCreators<SidebarAuthType> = (payload) => ({
  type: UPDATE_AUTH_TYPE,
  payload,
});

// relocate me!
export const passwordConfirmErrorOccurred: ActionCreators<string> = (
  payload
) => ({
  type: ADD_PASSWORD_ERROR,
  payload,
});

/**
 * Hide or show sidebar.
 */
export const visibilityToggled: ActionCreatorsNPL = () => ({
  type: TOGGLE_SIDEBAR_VISIBILITY,
});

export const swellMenuTypeUpdated: ActionCreators<SidebarSwellMenuType> = (
  payload
) => {
  return {
    type: UPDATE_SIDEBAR_SWELL_MENU_TYPE,
    payload,
  };
};
