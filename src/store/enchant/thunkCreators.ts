import { IEnchant } from './reducer';
import { ThunkCreators } from 'store/types';
import axios from 'axios';
import { enchantsRetrieved } from './actionCreators';

export const getEnchants =
  (limit = 15): ThunkCreators =>
  async (dispatch, getState) => {
    try {
      const { lastSeen, searchTags } = getState().enchant;
      const queryDate = lastSeen ? `&lastseen=${lastSeen}` : '';
      const queryTags = searchTags.length
        ? `&tags=${searchTags.toString()}`
        : '';

      const { data } = await axios.get<IEnchant[]>(
        `/enchants?limit=${limit}${queryDate}${queryTags}`
      );

      if (!data?.length || !data) throw new Error('No antiques found');

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
