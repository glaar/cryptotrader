import axios from 'axios';
import {GET_MARKETS, GET_BALANCES} from '../types';


export function getMarkets () {

    return dispatch => {
        axios.get('https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-eth', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-type':'application/json',
                'Accept':'application/json',
            }
        })
            .then( function(response) {
                dispatch({
                    type: GET_MARKETS,
                    markets: response.data.result[0]['MarketName'],
                    high: response.data.result[0]['High'],
                    low: response.data.result[0]['Low'],
                    volume: response.data.result[0]['Volume']
                });
            })
    }
}


export function getBalance() {
    return dispatch => {
        axios.get('/api/bittrex/')
            .then(response => {
                dispatch(askBalanceAsync(response.data.result));
            });
    }
}

function askBalanceAsync (data) {
    return {
        type: GET_BALANCES,
        payload: data
    }

}