from rest_framework import routers

from .views import (
    RegistrationViewset,
    UserViewSet,
)

router_acc = routers.DefaultRouter()

router_acc.register('account/register', RegistrationViewset, basename='register')
router_acc.register('account', UserViewSet, basename='account')
