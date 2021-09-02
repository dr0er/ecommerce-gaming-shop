from rest_framework import routers

from .views import (
    ProductViewset,
    OrderItemCreateViewset,
    OrderListViewset
)

router_b = routers.DefaultRouter()

router_b.register('products', ProductViewset, basename='product')
router_b.register('orderitem/add', OrderItemCreateViewset, basename='orderitem')
router_b.register('order', OrderListViewset, basename='order')
