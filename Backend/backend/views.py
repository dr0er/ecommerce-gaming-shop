from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (
    ListModelMixin,
    CreateModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
    DestroyModelMixin
)


from .models import Product
from .serializers import ProductSerializer
# Create your views here.


class ProductDetailViewset(
                   RetrieveModelMixin,
                   GenericViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
