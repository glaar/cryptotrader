import {GET_MARKETS, GET_BALANCES, DJANGO} from '../types';


function bittrex (state = {}
, action) {
    switch (action.type) {
        case GET_MARKETS:
            return Object.assign({}, state,
                {
                    ...state,
                    markets: action.markets,
                    high: action.high,
                    low: action.low,
                    volume: action.volume
                });
        case GET_BALANCES:
            return Object.assign({}, state,
                {
                    ...state,
                    balances: action.balances
                });
        case DJANGO:
            return Object.assign({}, state,
                {
                    ...state,
                    bittrexResults: action.payload
                });
        default:
            return state
    }
}

export default bittrex