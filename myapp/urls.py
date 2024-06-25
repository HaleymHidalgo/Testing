from django.contrib import admin
from django.urls import path
from myapp import views

urlpatterns = [
    path('', views.home),
    path('home', views.home),
    path('catalogo/', views.catalogo),
    path('nosotros/', views.nosotros)
]
