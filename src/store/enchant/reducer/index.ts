import {
  ENCHANT_UPDATE_SEARCH_QUERY,
  ENCHANT_UPDATE_SEARCH_TYPE,
} from 'store/actions';

import { AnyAction } from 'redux';
import { ENCHANT_SEARCH_TYPE_POPULAR } from 'constantVariables';

export type EnchantSearchType = string;
export type EnchantSearchQuery = string | null;

export interface IEnchantState {
  searchType: EnchantSearchType;
  searchQuery: EnchantSearchQuery;
}

export const enchantInitialState: IEnchantState = {
  searchType: ENCHANT_SEARCH_TYPE_POPULAR,
  searchQuery: null,
};

export default function reducer(
  state = enchantInitialState,
  { type, payload }: AnyAction
): IEnchantState {
  switch (type) {
    case ENCHANT_UPDATE_SEARCH_TYPE:
      return {
        ...state,
        searchType: payload,
      };
    case ENCHANT_UPDATE_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: payload,
      };
    default:
      return state;
  }
}
