from rest_framework import routers
from django.urls import path, include
from .views import *

router_b = routers.DefaultRouter()

router_b.register('products', ProductViewset, basename='product')
router_b.register('myorders', MyOrderListViewset, basename='myorders')


urlpatterns = [
    path('admin/products', AdminUserDashboardProductsList.as_view(), name='admin-products-list'),
    path('admin/products/<int:pk>', AdminUserDashboardProductManager.as_view(), name='admin-product-manager'),
]
