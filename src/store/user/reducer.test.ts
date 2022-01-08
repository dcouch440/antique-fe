import * as ac from './actionCreators';

import reducer, { UserInfo } from './reducer';

import { act } from 'react-dom/test-utils';
import { createStore } from 'redux';

const setup = () => {
  return createStore(reducer);
};

describe('user/Reducer', () => {
  it('adds a online user to the store', () => {
    const store = setup();

    const user: UserInfo = {
      id: '234234',
      username: 'testing',
    };

    act(() => {
      store.dispatch(ac.userLoggedIn(user));
    });

    for (const property in user) {
      const userFromState = store.getState();
      expect(user[property]).toEqual(userFromState[property]);
    }
  });
});
