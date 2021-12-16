import { Email, UserId, Username } from './types';

import { TypeKeysAsString } from 'store/types';

/*
 * Breaking up components of state for use in actions. This keeps data consistent across files.
 */

export interface User {
  id: UserId;
  username: Username;
  email: Email;
}

export type UserInfo = TypeKeysAsString<User>;

// UserState will be expanded with extends.
export type UserState = TypeKeysAsString<UserInfo>;
