from rest_framework import routers
from django.urls import path, include
from .views import (
    RegistrationViewset,
    UserViewset,
)

router_acc = routers.DefaultRouter()

router_acc.register('account/register', RegistrationViewset, basename='register')
router_acc.register('account/profile', UserViewset, basename='user-profile')
