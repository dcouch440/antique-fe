import { applyMiddleware, combineReducers, createStore } from 'redux';

import loggerMiddleware from 'redux-logger';
import { navigationReducer } from '../navigation';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  navigation: navigationReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;
