import { ADD_USER_TO_STORE } from 'store/actions';
import { createReducer } from 'store/utils';

const initialState = {
  id: null,
  username: 'seed user',
  email: 'seed_user@user.com',
  admin: false,
};

const reducer = createReducer(initialState, (state, payload) => ({
  [ADD_USER_TO_STORE]: () => ({
    ...state,
    id: payload.username,
    username: payload.username,
    email: payload.email,
    admin: payload.admin,
  }),
}));

export default reducer;
