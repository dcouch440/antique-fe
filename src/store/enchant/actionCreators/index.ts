import {
  ENCHANT_UPDATE_SEARCH_QUERY,
  ENCHANT_UPDATE_SEARCH_TYPE,
} from 'store/actions';
import { EnchantSearchQuery, EnchantSearchType } from '../reducer';

import { ActionCreators } from 'store/types';

export const searchTypeUpdated: ActionCreators<EnchantSearchType> = (
  payload
) => ({
  type: ENCHANT_UPDATE_SEARCH_TYPE,
  payload,
});

export const searchQueryUpdated: ActionCreators<EnchantSearchQuery> = (
  payload
) => ({
  type: ENCHANT_UPDATE_SEARCH_QUERY,
  payload,
});
