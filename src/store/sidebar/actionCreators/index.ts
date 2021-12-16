import { ActionCreators, ActionCreatorsNPL } from 'store/types';
import {
  SidebarAuthType,
  SidebarMiniMenuDragButtonVisibility,
  SidebarMiniMenuVisibility,
  SidebarSwellMenuType,
  SidebarType,
} from '../reducer/types';
import {
  TOGGLE_SIDEBAR_VISIBILITY,
  UPDATE_AUTH_TYPE,
  UPDATE_MINI_MENU_DRAG_BUTTON_VISIBILITY,
  UPDATE_MINI_MENU_VISIBILITY,
  UPDATE_SIDEBAR_SWELL_MENU_TYPE,
  UPDATE_SIDEBAR_TYPE,
} from 'store/actions';

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

/**
 * Hide or show sidebar.
 */
export const visibilityToggled: ActionCreatorsNPL = () => ({
  type: TOGGLE_SIDEBAR_VISIBILITY,
});

export const swellMenuTypeUpdated: ActionCreators<SidebarSwellMenuType> = (
  payload
) => ({
  type: UPDATE_SIDEBAR_SWELL_MENU_TYPE,
  payload,
});

/**
 * set the sidebar mini menu open and closed for mobile
 */
export const miniMenuVisibilityUpdated: ActionCreators<SidebarMiniMenuVisibility> =
  (payload) => ({
    type: UPDATE_MINI_MENU_VISIBILITY,
    payload,
  });

/**
 * set the sidebar mini menu button open and closed for mobile screens.
 */
export const miniMenuDragButtonVisibilityUpdated: ActionCreators<SidebarMiniMenuDragButtonVisibility> =
  (payload) => ({
    type: UPDATE_MINI_MENU_DRAG_BUTTON_VISIBILITY,
    payload,
  });
