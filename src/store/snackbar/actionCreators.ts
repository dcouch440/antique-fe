import { ActionCreators, ActionCreatorsNPL } from 'store/types';
import { CLEAR_ERROR, UPDATE_ERROR } from 'store/actions';

import { SnackBarError } from './reducer';

export const snackbarMessageSent: ActionCreators<SnackBarError> = (
  payload
) => ({
  type: UPDATE_ERROR,
  payload,
});

/**
 * clears error - setting to null
 */
export const snackbarMessageCleared: ActionCreatorsNPL = () => ({
  type: CLEAR_ERROR,
});
