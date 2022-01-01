import { enchantsArrayCleared, enchantsRetrieved } from './actionCreators';

import { IEnchant } from './reducer';
import { ThunkCreators } from 'store/types';
import axios from 'axios';

export const getEnchants = (): ThunkCreators => async (dispatch, getState) => {
  try {
    const { lastSeen, searchTags } = getState().enchant;
    const queryDate = lastSeen ? `&lastseen=${lastSeen}` : '';
    const queryTags = searchTags.length ? `&tags=${searchTags.toString()}` : '';

    const { data } = await axios.get<IEnchant[]>(
      `/enchants?limit=15${queryDate}${queryTags}`
    );
    // // eslint-disable-next-line no-debugger
    // debugger;
    if (!data?.length || !data) {
      throw new Error('No antiques found');
    }

    const newLastSeen = data[data.length - 1].id;

    dispatch(
      enchantsRetrieved({
        enchants: data,
        lastSeen: newLastSeen,
      })
    );
  } catch (err) {
    //TODO: handle error, snackbar?
    console.error(err);
  }
};

export const refreshAndGetEnchants =
  (): ThunkCreators => async (dispatch, getState) => {
    dispatch(enchantsArrayCleared());
    // // eslint-disable-next-line no-debugger
    // debugger;
    try {
      const { searchTags } = getState().enchant;
      const queryTags = searchTags.length
        ? `&tags=${searchTags.toString()}`
        : '';

      const { data } = await axios.get<IEnchant[]>(
        `/enchants?limit=15${queryTags}`
      );
      // // eslint-disable-next-line no-debugger
      // debugger;
      if (!data?.length || !data) {
        throw new Error('No antiques found');
      }

      const newLastSeen = data[data.length - 1].id;

      dispatch(
        enchantsRetrieved({
          enchants: data,
          lastSeen: newLastSeen,
        })
      );
    } catch (err) {
      console.error(err);
    }
  };
