from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')

def catalogo(request):
    return render(request, 'catalogo.html')

def nosotros(request):
    return render(request, 'nosotros.html')