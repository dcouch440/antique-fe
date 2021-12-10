import {
  ENCHANT_UPDATE_SEARCH_QUERY,
  ENCHANT_UPDATE_SEARCH_TYPE,
} from 'store/actions';

import { AnyAction } from 'redux';
import { ENCHANT_SEARCH_TYPE_POPULAR } from 'constantVariables';
import { IEnchantState } from './interfaces';

const initialState: IEnchantState = {
  searchType: ENCHANT_SEARCH_TYPE_POPULAR,
  searchQuery: '',
};

export default function reducer(
  state = initialState,
  { type, payload }: AnyAction
) {
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
