import {
  ADD_PASSWORD_ERROR,
  UPDATE_AUTH_TYPE,
  UPDATE_VERSION,
} from 'store/actions';

const initialState = {
  sidebarVersion: 'NAVIGATION',
  authType: 'LOGIN',
  errors: {
    passwordConfirm: '',
  },
};

const reducer = (state = initialState, action) => {
  const switchObj = {
    [UPDATE_VERSION]: () => ({
      ...state,
      sidebarVersion: action.payload,
    }),
    [UPDATE_AUTH_TYPE]: () => ({
      ...state,
      authType: action.payload,
    }),
    [ADD_PASSWORD_ERROR]: () => ({
      ...state,
      errors: {
        ...state.error,
        passwordConfirm: action.payload,
      },
    }),
  };

  return (switchObj[action.type] || (() => state))();
};

export default reducer;
