from rest_framework import routers
from django.urls import path
from .views import (
    RegistrationViewset,
    UserViewSet,
)

router_acc = routers.DefaultRouter()


router_acc.register('account/register', RegistrationViewset, basename='register')


urlpatterns = [
    path('account/detail/', UserViewSet.as_view(), name='user_detail')

]
