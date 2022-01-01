import { CLEAR_ERROR, UPDATE_ERROR } from 'store/actions';

import { AnyAction } from 'redux';

export type SnackBarError = string | null;

export interface ISnackbarState {
  message: SnackBarError;
}

export const errorInitialState: ISnackbarState = {
  message: '',
};

function reducer(
  state = errorInitialState,
  { type, payload }: AnyAction
): ISnackbarState {
  switch (type) {
    case UPDATE_ERROR:
      return {
        ...state,
        message: payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
}

export default reducer;
