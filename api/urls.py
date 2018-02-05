from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^test$', views.test, name='test'),
    url(r'^api/bittrex/$', views.ThatApiView.as_view(), name='bittrex'),
]
