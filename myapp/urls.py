from django.contrib import admin
from django.urls import path
from myapp import views

urlpatterns = [
    path('', views.home, name="index"),
    path('catalogo/', views.catalogo, name="catalogo"),
    path('nosotros/', views.nosotros, name="nosotros")
]
