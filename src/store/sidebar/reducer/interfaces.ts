import {
  SidebarAuthType,
  SidebarSwellMenuType,
  SidebarType,
  SidebarVisibility,
} from './types';

export interface ISidebarState {
  sidebarType: SidebarType;
  authType: SidebarAuthType;
  sidebarVisibility: SidebarVisibility;
  sidebarSwellMenuType: SidebarSwellMenuType;
  errors: {
    passwordConfirm: string;
  };
}
