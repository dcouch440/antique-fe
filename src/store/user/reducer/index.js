import { ADD_USER_TO_STORE } from 'store/actions';

const initialState = {
  id: null,
  username: 'seed user',
  email: 'seed_user@user.com',
  admin: false,
};

function reducer(state = initialState, { type, payload }) {
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
