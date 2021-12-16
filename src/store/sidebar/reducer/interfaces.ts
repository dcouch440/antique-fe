import {
  SidebarAuthType,
  SidebarMiniMenuDragButtonVisibility,
  SidebarMiniMenuVisibility,
  SidebarType,
  SidebarVisibility,
} from './types';

export interface ISidebarState {
  sidebarType: SidebarType;
  authType: SidebarAuthType;
  sidebarVisibility: SidebarVisibility;
  miniMenuVisibility: SidebarMiniMenuVisibility;
  miniMenuDragButtonVisibility: SidebarMiniMenuDragButtonVisibility;
  errors: {
    passwordConfirm: string;
  };
}
