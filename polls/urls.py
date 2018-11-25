from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # path('<str:security_code>/', views.detail, name='detail'),
    path('calculator/', views.calculator, name='calculator'),
]

