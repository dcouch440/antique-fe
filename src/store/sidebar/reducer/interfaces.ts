import {
  SidebarAuthType,
  SidebarMiniMenuDragButtonVisibility,
  SidebarMiniMenuVisibility,
  SidebarSwellMenuType,
  SidebarType,
  SidebarVisibility,
} from './types';

export interface ISidebarState {
  sidebarType: SidebarType;
  authType: SidebarAuthType;
  sidebarVisibility: SidebarVisibility;
  swellMenuType: SidebarSwellMenuType;
  miniMenuVisibility: SidebarMiniMenuVisibility;
  miniMenuDragButtonVisibility: SidebarMiniMenuDragButtonVisibility;
  errors: {
    passwordConfirm: string;
  };
}
