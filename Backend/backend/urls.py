from rest_framework import routers

from .views import (
    ProductDetailViewset,
)

router = routers.DefaultRouter()

router.register('product_detail', ProductDetailViewset, basename='product')
router.register('products', ProductViewSet, basename='product')
