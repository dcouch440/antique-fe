import { ThunkCreators } from 'store/types';
import axios from 'axios';
import { userLoggedIn } from '../actionCreators';

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
        '/users/sign-up',
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
