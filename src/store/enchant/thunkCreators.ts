import { IEnchant } from './reducer';
import { ThunkCreators } from 'store/types';
import axios from 'axios';
import { enchantsRetrieved } from './actionCreators';

export const getEnchants = (): ThunkCreators => async (dispatch, getState) => {
  try {
    const { lastSeen, enchants } = getState().enchant;
    const queryDate = lastSeen ?? new Date().toUTCString();

    const { data } = await axios.get<IEnchant[]>(
      `/enchants?limit=1555&offset=${enchants.length}&lastSeen=${queryDate}`
    );

    console.log(data);

    if (!data.length) {
      throw new Error('No antiques found');
    }

    const newLastSeen = data[data.length - 1].createdAt;

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
