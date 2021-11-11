import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/Books';

const reducer = combineReducers({
  // reducers come here
  booksReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
export default store;
