from rest_framework import routers
from django.urls import path, include
from .views import (
    RegistrationViewset,
    UserViewset,
    MyTokenObtainPairView
)

router_acc = routers.DefaultRouter()

router_acc.register('account/register', RegistrationViewset, basename='register')
router_acc.register('account/profile', UserViewset, basename='user-profile')
router_acc.register('account/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair')
