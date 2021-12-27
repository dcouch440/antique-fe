import { ADD_USER_TO_STORE } from 'store/actions';
import { AnyAction } from 'redux';
import { UserState } from './interfaces';

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
