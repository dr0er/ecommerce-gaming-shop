from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (
    CreateModelMixin,
)

from .models import CustomUser
from .serializers import RegistrationSerializer


class RegistrationViewset(
                    CreateModelMixin,
                    GenericViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = RegistrationSerializer

    def create(self, request, *args, **kwargs):
        if request.method == 'POST':
            serializer = RegistrationSerializer(data=request.data)
            data = {}
            if serializer.is_valid():
                user = serializer.save()
                data['response'] = 'Successfully registered a new user!'
                data['email'] = user.email
                data['username'] = user.username
            else:
                data = serializer.errors
            return Response(data)
