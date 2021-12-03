import { applyMiddleware, combineReducers, createStore } from 'redux';

import loggerMiddleware from 'redux-logger';
import { sidebarReducer } from '../sidebar';
import thunkMiddleware from 'redux-thunk';
import { userReducer } from 'store/user';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;
