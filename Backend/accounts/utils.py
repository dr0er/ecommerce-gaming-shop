from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAdminUser
from rest_framework_simplejwt.authentication import JWTAuthentication


USER_MODEL = get_user_model()


def chcek_admin_permissions(self):
    user_staff = self.request.user.is_staff
    if user_staff:
        return [IsAdminUser()]
    else:
        return []


def check_admin_authentication(self):
    user_staff = self.request.user.is_staff
    if user_staff:
        return [JWTAuthentication()]
    else:
        return []
