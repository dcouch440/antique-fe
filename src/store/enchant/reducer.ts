import {
  ENCHANT_GET_ENCHANTS,
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
  searchType: EnchantSearchType;
  searchQuery: EnchantSearchQuery;
  enchants: IEnchant[] | [];
  lastSeen: string | null;
}

export const enchantInitialState: IEnchantState = {
  searchType: ENCHANT_SEARCH_TYPE_POPULAR,
  searchQuery: null,
  enchants: [],
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
        enchants: [...state.enchants, payload.enchants],
        lastSeen: payload.lastSeen,
      };
    default:
      return state;
  }
}
