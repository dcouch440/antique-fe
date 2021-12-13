import * as ac from '../actionCreators';

import { TypeKeysAsString } from 'store/types';
import { UserInfo } from './interfaces';
import { createStore } from 'redux';
import reducer from '.';

const setup = () => {
  return createStore(reducer);
};

describe('user/Reducer', () => {
  it('adds a online user to the store', () => {
    const store = setup();

    const user: UserInfo = {
      admin: true,
      email: 'testing',
      id: 2,
      username: 'testing',
    };
    store.dispatch(ac.userLoggedIn(user));

    for (const property in user) {
      const userFromState = store.getState();
      expect(user[property]).toEqual(userFromState[property]);
    }
  });
});
