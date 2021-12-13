import { createStore } from 'redux';
import { enchantInitialState } from './enchant/reducer';
import { rootReducer } from 'store';
import { sidebarInitialState } from './sidebar/reducer';
import { userInitialState } from './user/reducer';

export const setupTestStore = () => {
  return createStore(rootReducer);
};
describe('store', () => {
  it('creates a store with all initial states within it', () => {
    const store = setupTestStore();
    expect(store.getState()['enchant']).toEqual(enchantInitialState);
    expect(store.getState()['sidebar']).toEqual(sidebarInitialState);
    expect(store.getState()['user']).toEqual(userInitialState);
  });
});
