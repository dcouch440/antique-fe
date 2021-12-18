import { AnyAction } from 'redux';
import { IEnchantState } from './enchant/reducer/interfaces';
import { ISidebarState } from './sidebar/reducer/interfaces';
import { ISnackbarState } from './snackbar/reducer/interfaces';
import { ThunkAction } from 'redux-thunk';
import { UserState } from './user/reducer/interfaces';

/*
 * Holds types for use across multiple files within the store space.
 */

/**
 * @description Gives a generic return type for type with the given argument
 * @example
 * ```
 * const action: ActionCreators<PayloadType> = (payload) => ({})
 * ```
 */
export type ActionCreators<T> = (payload: T) => { type: string; payload: T };

/**
 * @description Gives a type for a thunk creator, one use on the outer function will set types for everything.
 * @example
 * ```
 * const thunk = (): ThunkCreators => () => { Logic }
 * ```
 */
export type ThunkCreators = ThunkAction<void, IAppState, unknown, AnyAction>;

/**
 * @description Gives a generic return type for actions with no payload.
 * @example
 * ```
 * const action: ActionCreatorsNPL = () => ({})
 * ```
 */
export type ActionCreatorsNPL = () => { type: string };

/**
 * @description Gives a total overview of types from their respected location.
 */

export interface IAppState {
  user: UserState;
  enchant: IEnchantState;
  sidebar: ISidebarState;
  snackbar: ISnackbarState;
}

/**
 * @description types object values as string;
 */
export type TypeKeysAsString<Type> = {
  [Property in keyof Type as string]: Type[Property];
};
