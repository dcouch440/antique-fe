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
  sidebarSwellMenuType: SidebarSwellMenuType;
  sidebarMiniMenuVisibility: SidebarMiniMenuVisibility;
  sidebarMiniMenuDragButtonVisibility: SidebarMiniMenuDragButtonVisibility;
  errors: {
    passwordConfirm: string;
  };
}
