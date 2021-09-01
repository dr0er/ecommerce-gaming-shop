from rest_framework import routers

from .views import (
    ProductViewset,
)

router_b = routers.DefaultRouter()

router_b.register('products', ProductViewset, basename='product')
