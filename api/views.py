from django.shortcuts import render
from bittrex import Bittrex


my_bittrex = Bittrex(None, None, api_version=API_V2_0)  # or defaulting to v1.1 as Bittrex(None, None)
my_bittrex.get_markets()

print(my_bittrex)


import requests
import json


def index(request):
    response = requests.get('https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-neo')
    jdata = json.loads(response.content)
    context = jdata['result'][0]
    print(jdata['result'][0]['MarketName'])

    return render(request, 'api/index.html', context)


def test(request):

    context = {'wallet': '100'}
    return render(request, 'api/test.html', context)
