from rest_framework import routers
from django.urls import path, include
from .views import *

router_acc = routers.DefaultRouter()

router_acc.register('account/register', RegistrationViewset, basename='register')
router_acc.register('account/profile', UserViewset, basename='user-profile')

urlpatterns = [
    # path('', include(router_acc.urls)),
    path('account/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]
