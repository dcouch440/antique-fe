import {
  ENCHANT_ADD_TAG,
  ENCHANT_ARRAY_CLEARED,
  ENCHANT_ENCHANT_DATA,
  ENCHANT_GET_ENCHANT,
  ENCHANT_GET_ENCHANTS,
  ENCHANT_REMOVE_TAG,
  ENCHANT_UPDATE_SEARCH_QUERY,
  ENCHANT_UPDATE_SEARCH_TYPE,
} from 'store/actions';

import { AnyAction } from 'redux';
import { ENCHANT_SEARCH_TYPE_POPULAR } from 'constantVariables';

export type EnchantSearchType = string;
export type EnchantSearchQuery = string | null;

export interface IEnchant {
  id: string;
  userId: string;
  username: string;
  userAvatar: string;
  tags: Array<string> | [];
  likes: number;
  itemName: string;
  images: Array<{
    id: string;
    url: string;
    favorite: boolean;
    caption: string;
  }>;
  condition: string;
  origin: string;
  title: string;
  whereFound: string;
  createdAt: string;
}

export interface IEnchantState {
  searchTags: Array<string>;
  searchType: EnchantSearchType;
  searchQuery: EnchantSearchQuery;
  enchants: IEnchant[];
  enchant: IEnchant | null;
  lastSeen: string | null;
}

export const enchantInitialState: IEnchantState = {
  searchTags: [],
  searchType: ENCHANT_SEARCH_TYPE_POPULAR,
  searchQuery: null,
  enchants: [],
  enchant: null,
  lastSeen: null,
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
    case ENCHANT_GET_ENCHANTS:
      return {
        ...state,
        enchants: [...state.enchants, ...payload.enchants],
        lastSeen: payload.lastSeen,
      };
    case ENCHANT_GET_ENCHANT:
      return {
        ...state,
        enchant: payload,
      };
    case ENCHANT_ENCHANT_DATA:
      return {
        ...state,
        enchants: [],
        searchTags: [],
        lastSeen: null,
      };
    case ENCHANT_ADD_TAG:
      if (state.searchTags.includes(payload) || payload.trim() === '') {
        return state;
      }
      return {
        ...state,
        searchTags: [...state.searchTags, payload.trim()],
      };
    case ENCHANT_REMOVE_TAG:
      return {
        ...state,
        searchTags: state.searchTags.filter((t) => t !== payload),
      };
    case ENCHANT_ARRAY_CLEARED:
      return {
        ...state,
        enchants: [],
        lastSeen: null,
      };
    default:
      return state;
  }
}
