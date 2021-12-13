import { ActionCreators, ActionCreatorsNPL } from 'store/types';
import { CLEAR_ERROR, UPDATE_ERROR } from 'store/actions';

import { SnackBarError } from '../reducer/types';

export const errorOccurred: ActionCreators<SnackBarError> = (payload) => ({
  type: UPDATE_ERROR,
  payload,
});

/**
 * clears error - setting to null
 */
export const errorCleared: ActionCreatorsNPL = () => ({
  type: CLEAR_ERROR,
});
