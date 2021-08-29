from rest_framework import routers

from .views import (
    RegistrationViewset,
)

router_acc = routers.DefaultRouter()

router_acc.register('register', RegistrationViewset, basename='register')
