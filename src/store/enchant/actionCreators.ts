import {
  ENCHANT_GET_ENCHANTS,
  ENCHANT_UPDATE_SEARCH_QUERY,
  ENCHANT_UPDATE_SEARCH_TYPE,
} from 'store/actions';
import { EnchantSearchQuery, EnchantSearchType, IEnchant } from './reducer';

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

export const enchantRetrieved: ActionCreators<{
  enchants: Array<IEnchant>;
  lastSeen: string | boolean;
}> = ({ lastSeen, enchants }) => ({
  type: ENCHANT_GET_ENCHANTS,
  payload: { lastSeen, enchants },
});
