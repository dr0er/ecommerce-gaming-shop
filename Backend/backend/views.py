from django.shortcuts import redirect
from rest_framework.response import Response
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (
    ListModelMixin,
    CreateModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
    DestroyModelMixin
)
from rest_framework.generics import (
    RetrieveUpdateDestroyAPIView,
    ListCreateAPIView,
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
    AddressSerializer,
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
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['name', 'brand__name']


class MyOrderListViewset(
                    ListModelMixin,
                    GenericViewSet):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        queryset = user.order_set.all().order_by('-createdAt')
        return queryset


class AdminUserDashboardProductsList(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUser,]


class AdminUserDashboardProductManager(RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUser,]
