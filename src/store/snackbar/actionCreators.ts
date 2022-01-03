import { ActionCreators, ActionCreatorsNPL } from 'store/types';
import { CLEAR_MESSAGE, UPDATE_MESSAGE } from 'store/actions';

import { SnackBarError } from './reducer';

export const snackbarMessageSent: ActionCreators<SnackBarError> = (
  payload
) => ({
  type: UPDATE_MESSAGE,
  payload,
});

/**
 * clears error - setting to null
 */
export const snackbarMessageCleared: ActionCreatorsNPL = () => ({
  type: CLEAR_MESSAGE,
});
