from rest_framework import permissions
from rest_framework.request import Request

from accounts.models import CustomUser


class IsOwner(permissions.IsAuthenticated):
    def has_object_permission(self, request: Request, view, obj: CustomUser) -> bool:
        # only owner can get details view data
        return obj == request.user
