import { ActionCreators, ActionCreatorsNPL } from 'store/types';
import {
  ENCHANT_CLEAR_ENCHANTS,
  ENCHANT_GET_ENCHANTS,
  ENCHANT_UPDATE_SEARCH_QUERY,
  ENCHANT_UPDATE_SEARCH_TYPE,
} from 'store/actions';
import { EnchantSearchQuery, EnchantSearchType, IEnchant } from './reducer';

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

export const enchantsRetrieved: ActionCreators<{
  enchants: Array<IEnchant>;
  lastSeen: string;
}> = ({ lastSeen, enchants }) => ({
  type: ENCHANT_GET_ENCHANTS,
  payload: { lastSeen, enchants },
});

export const clearEnchants: ActionCreatorsNPL = () => ({
  type: ENCHANT_CLEAR_ENCHANTS,
});
