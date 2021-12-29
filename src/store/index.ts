import { applyMiddleware, combineReducers, createStore } from 'redux';

import enchantReducer from 'store/enchant/reducer';
import loggerMiddleware from 'redux-logger';
import { reducer as sidebarReducer } from './sidebar/reducer';
import { snackbarReducer } from './snackbar';
import thunkMiddleware from 'redux-thunk';
import userReducer from 'store/user/reducer';

export const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  user: userReducer,
  enchant: enchantReducer,
  snackbar: snackbarReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;
