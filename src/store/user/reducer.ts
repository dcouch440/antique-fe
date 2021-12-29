import { ADD_USER_TO_STORE } from 'store/actions';
import { AnyAction } from 'redux';
import { TypeKeysAsString } from 'store/types';

export interface User {
  userId: UserId;
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
  userId: null,
  username: 'seed user',
  email: 'seed_user@user.com',
};

function reducer(
  state = userInitialState,
  { type, payload }: AnyAction
): UserState {
  switch (type) {
    case ADD_USER_TO_STORE:
      return {
        ...state,
        userId: payload.userId,
        username: payload.username,
        email: payload.email,
      };
    default:
      return state;
  }
}

export default reducer;
