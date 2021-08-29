from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (
    ListModelMixin,
    CreateModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
    DestroyModelMixin
)


from .models import (
    Address,
    Order,
    Review,
    Product,
    Brand,
    Category,
    OrderItem
)
from .serializers import (
    AdressSerializer,
    OrderSerializer,
    ReviewSerializer,
    ProductSerializer,
    BrandSerializer,
    CategorySerializer,
    OrderItemSerializer
)
# Create your views here.


class ProductDetailViewset(
                    RetrieveModelMixin,
                    GenericViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
