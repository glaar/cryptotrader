import { combineReducers, createStore } from 'redux'

//Reducers
import bittrex from '../reducers/bittrex'

const reducers = {
    bittrex,
};

const store = createStore(
    combineReducers(reducers), {},
);

export default store