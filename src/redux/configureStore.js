import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/Books';

const reducer = combineReducers({
  // reducers come here
  booksReducer,
});

const store = createStore(reducer, applyMiddleware(logger));
export default store;
