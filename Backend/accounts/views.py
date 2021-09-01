from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (
    ListModelMixin,
    CreateModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
    DestroyModelMixin
)
from .utils import USER_MODEL
from .permissions import IsOwner
from .serializers import (
    RegistrationSerializer,
    UserSerializer,
)


class RegistrationViewset(
                    CreateModelMixin,
                    GenericViewSet):
    queryset = USER_MODEL.objects.all()
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


class UserViewSet(
                    ListModelMixin,
                    RetrieveModelMixin,
                    UpdateModelMixin,
                    GenericViewSet):
    queryset = USER_MODEL.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsOwner]
