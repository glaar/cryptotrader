import { GET_MARKETS, GET_BALANCES } from '../types';


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

        default:
            return state
    }
}

export default bittrex