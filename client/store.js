import { createStore, applyMiddleware } from 'redux';
import dummyReducer from './redux/index';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
  dummyReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;