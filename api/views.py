from django.shortcuts import render


import requests
import json


def index(request):
    response = requests.get('https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-neo')
    jdata = json.loads(response.content)
    context = jdata['result'][0]
    print(jdata['result'][0]['MarketName'])

    return render(request, 'api/index.html', context)
