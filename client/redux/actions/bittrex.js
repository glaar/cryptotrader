import axios from 'axios';

import { GET_MARKETS, GET_BALANCES } from '../types';


export function getMarkets () {

    return dispatch => {
        axios.get('https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-neo', {
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

export function getBalances () {
    return dispatch => {
        axios.get('https://bittrex.com/api/v1.1/account/getbalances?apikey=93cf695f625043d2a890206307bd07b4', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-type':'application/json',
                'Accept':'application/json',
            }
        })
            .then(function (response) {
                console.log(response);
                dispatch({
                    type: GET_BALANCES,
                    balances: response
                });
            })
    }
}