import {
  ENCHANT_UPDATE_SEARCH_QUERY,
  ENCHANT_UPDATE_SEARCH_TYPE,
} from 'store/actions';

export const searchTypeUpdated = (payload) => ({
  type: ENCHANT_UPDATE_SEARCH_TYPE,
  payload,
});

export const searchQueryUpdated = (payload) => ({
  type: ENCHANT_UPDATE_SEARCH_QUERY,
  payload,
});
