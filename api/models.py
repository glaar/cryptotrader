from django.db import models


class Market(models.Model):
    market = models.CharField(max_length=200)

    def __str__(self):
        return self.market


class Wallet(models.Model):
    currency = models.CharField(max_length=25)
    balance = models.FloatField()
    available = models.FloatField()

    def __str__(self):
        return self.currency, self.balance
