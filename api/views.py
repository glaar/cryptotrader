from django.shortcuts import render
from bittrex import Bittrex


API = Bittrex(None, None)  # or defaulting to v1.1 as Bittrex(None, None)

import requests
import json


def index(request):
    response = requests.get('https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-neo')
    jdata = json.loads(response.content)
    context = jdata['result'][0]
    print(jdata['result'][0]['MarketName'])

    return render(request, 'api/index.html', context)


def test(request):

    context = API.get_ticker('BTC-NEO')
    return render(request, 'api/test.html', context)
