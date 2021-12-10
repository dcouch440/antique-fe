import { ADD_USER_TO_STORE } from 'store/actions';
import { AnyAction } from 'redux';
import { IUserState } from './interfaces';

const initialState: IUserState = {
  id: null,
  username: 'seed user',
  email: 'seed_user@user.com',
  admin: false,
};

function reducer(state = initialState, { type, payload }: AnyAction) {
  switch (type) {
    case ADD_USER_TO_STORE:
      return {
        ...state,
        id: payload.username,
        username: payload.username,
        email: payload.email,
        admin: payload.admin,
      };
    default:
      return state;
  }
}

export default reducer;
