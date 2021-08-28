from rest_framework import routers

from .views import ProductDetailViewset

router = routers.DefaultRouter()

router.register('product', ProductDetailViewset, basename='product')
