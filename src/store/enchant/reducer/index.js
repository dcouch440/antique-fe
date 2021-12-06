import {
  ENCHANT_UPDATE_SEARCH_QUERY,
  ENCHANT_UPDATE_SEARCH_TYPE,
} from 'store/actions';

import { ENCHANT_SEARCH_TYPE_POPULAR } from 'constantVariables';

const initialState = {
  searchType: ENCHANT_SEARCH_TYPE_POPULAR,
  searchQuery: '',
};

export default function reducer(state = initialState, { type, payload }) {
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
