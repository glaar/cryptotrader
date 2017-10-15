function bittrex (state = {}
, action) {
    switch (action.type) {
        case 'GET_MARKETS':
            return Object.assign({}, ...state,
                {
                    markets: action.markets
                });

        default:
            return state
    }
}

export default bittrex