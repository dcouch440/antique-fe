import { userLoggedIn, userLoggedOut } from './actionCreators';

import { ThunkCreators } from 'store/types';
import axios from 'axios';

interface ISignup {
  username: string;
  password: string;
  email: string;
}

export const thunkSignup =
  ({ username, password, email }: ISignup): ThunkCreators =>
  async (dispatch) => {
    try {
      const { data } = await axios.post(
        '/users',
        { username, password, email },
        { withCredentials: true }
      );

      dispatch(userLoggedIn(data));
    } catch ({
      response: {
        data: { message },
      },
    }) {
      //TODO: handle error, snackbar?
      // if Unprocessable entity, log message for "wrong email text from server."
      console.error(message);
    }
  };

export const thunkSession = (): ThunkCreators => async (dispatch) => {
  try {
    const { data } = await axios.post(
      '/users/session',
      {},
      {
        withCredentials: true,
      }
    );
    dispatch(userLoggedIn(data));
  } catch (err) {
    //TODO: handle error, snackbar?
    console.error(err);
  }
};

export const thunkLogout = (): ThunkCreators => async (dispatch, getState) => {
  try {
    const { id } = getState().user;
    const request = await axios.delete(`/users/${id}/log-out`, {
      withCredentials: true,
    });
    if (request.status === 204) {
      dispatch(userLoggedOut());
    }
  } catch (err) {
    console.error(err);
  }
};

export const thunkLogin =
  ({ email, password }: { email: string; password: string }): ThunkCreators =>
  async (dispatch) => {
    try {
      const { data } = await axios.post(
        '/users/login',
        { email, password },
        { withCredentials: true }
      );
      dispatch(userLoggedIn(data));
    } catch (err) {
      console.error(err);
    }
  };
