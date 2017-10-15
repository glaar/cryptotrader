import axios from 'axios';

import { GET_MARKETS } from '../types';


export function getMarkets () {

    return dispatch => {
        axios.get('https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-neo', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-type':'application/json',
                'Accept':'application/json',
            }
        })
            .then((response) => {
            console.log(response.data.result[0]);
               dispatch({
                   type: GET_MARKETS,
                   markets: response.data.result[0]
               })
        })
    }
}