import { ADD_USER_TO_STORE, REMOVE_USER_FROM_STORE } from 'store/actions';

import { AnyAction } from 'redux';
import { TypeKeysAsString } from 'store/types';

export interface User {
  id: UserId;
  username: Username;
  email: Email;
}
export type UserId = string | null;
export type Username = string | null;
export type Email = string | null;
export type UserInfo = TypeKeysAsString<User>;

// UserState will be expanded with extends.
export type UserState = TypeKeysAsString<UserInfo>;
export const userInitialState: UserState = {
  id: null,
  username: null,
  email: null,
};

function reducer(
  state = userInitialState,
  { type, payload }: AnyAction
): UserState {
  switch (type) {
    case ADD_USER_TO_STORE:
      return {
        ...state,
        id: payload.id,
        username: payload.username,
        email: payload.email,
      };
    case REMOVE_USER_FROM_STORE:
      return {
        ...state,
        id: null,
        username: null,
        email: null,
      };
    default:
      return state;
  }
}

export default reducer;
