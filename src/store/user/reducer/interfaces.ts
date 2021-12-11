import { Admin, Email, UserId, Username } from './types';

/*
 * Breaking up components of state for use in actions. This keeps data consistent across files.
 */

export interface IUserInfo {
  id: UserId;
  username: Username;
  email: Email;
  admin: Admin;
}

// UserState will be expanded with extends.
export type IUserState = IUserInfo;
