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
from accounts.utils import chcek_admin_permissions, check_admin_authentication
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

    def list(self, request, *args, **kwargs):
        user = self.request.user
        if user.is_staff:
            queryset = Product.objects.all()
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data)
        else:
            return redirect('/api')

    def get_permissions(self):
        return chcek_admin_permissions(self)

    def get_authenticators(self):
        return check_admin_authentication(self)


class AdminUserDashboardProductManager(RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUser,]

    def get(self, *args, **kwargs):
        user = self.request.user
        if user.is_staff:
            return self.retrieve(*args, **kwargs)
        else:
            return redirect('/api')

    def get_permissions(self):
        return chcek_admin_permissions(self)

    def get_authenticators(self):
        return check_admin_authentication(self)
