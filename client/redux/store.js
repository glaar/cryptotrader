import { combineReducers, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//Reducers
import bittrex from './reducers/bittrex'

const reducers = {
    bittrex,
};

const store = createStore(
    combineReducers(reducers), {}, applyMiddleware(logger, thunk)
);

export default store