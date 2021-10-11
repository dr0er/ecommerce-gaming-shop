from rest_framework import routers
from django.urls import path, include
from .views import *

router_acc = routers.DefaultRouter()

router_acc.register('account/register', RegistrationViewset, basename='register')
# router_acc.register('account/profile', UserViewset, basename='user-profile')

urlpatterns = [
    # path('', include(router_acc.urls)),
    path('account/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('account/profile', getUserProfile.as_view(), name='users-profile'),
    path('account/profile/update/', updateUserProfile.as_view(), name='users-profile-update'),
    path('admin', AdminUserDashboardList.as_view(), name='admin-list'),
    path('admin/manager/<int:pk>', AdminUserDashboardManager.as_view(), name='admin-manager'),
]
