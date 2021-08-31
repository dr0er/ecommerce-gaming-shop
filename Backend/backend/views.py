from django.shortcuts import render

# Create your views here.
from rest_framework.viewsets import  ModelViewSet

from .models import *
from .serializers import *


class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()