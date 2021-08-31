from django.shortcuts import render
from django.views.generic import ListView
from .models import *
from .serializers import *

class ProductViewSet(ListView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


