import { IEnchant } from './reducer';
import { ThunkCreators } from 'store/types';
import axios from 'axios';
import { enchantsRetrieved } from './actionCreators';

export const getEnchants = (): ThunkCreators => async (dispatch, getState) => {
  try {
    const { lastSeen, searchTags, enchants } = getState().enchant;
    const queryDate = lastSeen ? `&lastseen=${lastSeen}` : '';
    const queryTags = searchTags.length ? `&tags=${searchTags.toString()}` : '';
    const limit = 15;
    // if a previous request was made and the results where less
    // than the maximum value, then the query did not find enough
    // the thunk should return to prevent the api getting a second
    // request from the intersection observer
    // as the request will result it nothing.
    if (enchants.length < limit && lastSeen !== null) return;

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
