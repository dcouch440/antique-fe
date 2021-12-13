import { ADD_USER_TO_STORE } from 'store/actions';
import { AnyAction } from 'redux';
import { UserState } from './interfaces';

export const userInitialState: UserState = {
  id: null,
  username: 'seed user',
  email: 'seed_user@user.com',
  admin: false,
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
        admin: payload.admin,
      };
    default:
      return state;
  }
}

export default reducer;
