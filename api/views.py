from django.shortcuts import render
from bittrex import Bittrex

import requests
import json
import os

API_KEY = os.environ['API_KEY']
API_SECRET = os.environ['API_SECRET']

API = Bittrex(API_KEY, API_SECRET)  # or defaulting to v1.1 as Bittrex(None, None)


def index(request):
    response = requests.get('https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-neo')
    jdata = json.loads(response.content)
    context = jdata['result'][0]
    print(jdata['result'][0]['MarketName'])
    return render(request, 'api/index.html', context)


def test(request):
    context = API.get_balance('ETH')
    print(context)
    return render(request, 'api/test.html', context)
