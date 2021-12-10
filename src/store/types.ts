import { IEnchantState } from './enchant/reducer/interfaces';
import { ISidebarState } from './sidebar/reducer/interfaces';
import { IUserState } from './user/reducer/interfaces';

/*
 * Holds types for use across multiple files within the store space.
 */

/**
 * @description Gives a generic return type for type with the given argument
 */
export type ActionCreators<T> = (payload: T) => { type: string; payload: T };

/**
 * @description Gives a generic return type for actions with no payload.
 */
export type ActionCreatorsNPL = () => { type: string };

/**
 * @description Gives a total overview of types from their respected location.
 */
export interface IAppState {
  user: IUserState;
  enchant: IEnchantState;
  sidebar: ISidebarState;
}
