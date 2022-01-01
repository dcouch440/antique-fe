import { ActionCreators, ActionCreatorsNPL } from 'store/types';
import {
  ENCHANT_ADD_TAG,
  ENCHANT_ARRAY_CLEARED,
  ENCHANT_ENCHANT_DATA,
  ENCHANT_GET_ENCHANTS,
  ENCHANT_REMOVE_TAG,
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

export const clearEnchantData: ActionCreatorsNPL = () => ({
  type: ENCHANT_ENCHANT_DATA,
});

export const enchantsArrayCleared: ActionCreatorsNPL = () => ({
  type: ENCHANT_ARRAY_CLEARED,
});

export const tagAdded: ActionCreators<string> = (payload) => ({
  type: ENCHANT_ADD_TAG,
  payload,
});

export const tagRemoved: ActionCreators<string> = (payload) => ({
  type: ENCHANT_REMOVE_TAG,
  payload,
});
