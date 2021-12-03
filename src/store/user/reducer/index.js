import { ADD_USER_TO_STORE } from 'store/actions';

const initialState = {
  id: null,
  username: null,
  email: null,
  admin: false,
};

const reducer = (state = initialState, { payload, type }) => {
  const switchObj = {
    [ADD_USER_TO_STORE]: () => ({
      ...state,
      id: payload.username,
      username: payload.username,
      email: payload.email,
      admin: payload.admin,
    }),
  };

  return (switchObj[type] || (() => state))();
};

export default reducer;
