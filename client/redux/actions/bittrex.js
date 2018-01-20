import axios from 'axios';
import {GET_MARKETS, GET_BALANCES, DJANGO} from '../types';


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

export function getBalances () {
    return dispatch => {
        const data = {
            type: GET_BALANCES,
            balances: "nothing"
        };
        dispatch(data)
    }
}

export function askDjango() {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch(askDjangoAsync(response.data.id));
            });
    }
}

function askDjangoAsync (data) {
    return {
        type: DJANGO,
        payload: data
    }

}