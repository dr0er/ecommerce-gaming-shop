from rest_framework.permissions import IsAuthenticated, AllowAny
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


class ProductViewset(
                    ListModelMixin,
                    RetrieveModelMixin,
                    GenericViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]


class OrderItemCreateViewset(
                    CreateModelMixin,
                    GenericViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
    permission_classes = [IsAuthenticated]


class OrderListViewset(
                    ListModelMixin,
                    GenericViewSet):
    queryset = Order.objects.filter()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        queryset = Order.objects.filter(user=user).order_by('-createdAt')
        return queryset
