import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const reducer = combineReducers({

});

const store = createStore(
    reducer,
    applyMiddleware(logger)
);

export default store;
