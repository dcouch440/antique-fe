import { UPDATE_PATH } from 'store/actions';

const initialState = {
  path: 'login',
};

const reducer = (state = initialState, action) => {
  const switchObj = {
    [UPDATE_PATH]: () => ({
      ...state,
      path: action.payload,
    }),
  };

  return (switchObj[action.type] || (() => state))();
};

export default reducer;
