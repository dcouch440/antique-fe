import { AnyAction } from 'redux';
import { IAppState } from 'store/types';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { userLoggedIn } from '../actionCreators';

interface ISignup {
  username: string;
  password: string;
  email: string;
}

export const thunkSignup =
  ({
    username,
    password,
    email,
  }: ISignup): ThunkAction<void, IAppState, unknown, AnyAction> =>
  async (dispatch) => {
    try {
      const { data } = await axios.post(
        'http://localhost:3001/users/sign-up',
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
      console.error(message);
    }
  };
