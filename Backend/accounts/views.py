from django.contrib.auth import authenticate, login
from django.shortcuts import redirect
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.viewsets import GenericViewSet, ReadOnlyModelViewSet
from rest_framework.response import Response
from rest_framework.generics import (
    RetrieveUpdateDestroyAPIView,
    RetrieveUpdateAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    ListAPIView,
)
from rest_framework.mixins import (
    ListModelMixin,
    CreateModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
    DestroyModelMixin
)
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.contrib.auth import get_user_model
from .utils import USER_MODEL
from .serializers import (
    RegistrationSerializer,
    UserSerializer,
    UserSerializerWithToken
)
# tokens
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        # What should be returned in api response
        # data['username'] = self.user.username
        # data['email'] = self.user.email

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


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
                data['token'] = serializer.get_token(user)
                new_user = authenticate(email=request.POST.get('email'),
                    password=request.POST.get('password'),
                    )
                if new_user is not None and new_user.is_active:
                    login(request, new_user)
            else:
                data = serializer.errors
            return Response(data, status=status.HTTP_201_CREATED)


class getUserProfile(RetrieveAPIView):
    queryset = USER_MODEL.objects.all()
    serializer_class = UserSerializerWithToken
    permission_classes = [IsAuthenticated,]

    def get_object(self):
        user = self.request.user
        return user


class updateUserProfile(UpdateAPIView):
    queryset = USER_MODEL.objects.all()
    serializer_class = UserSerializerWithToken
    permission_classes = [IsAuthenticated,]

    def get_object(self):
        user = self.request.user
        return user


class AdminUserDashboardListUsers(ListAPIView):
    queryset = USER_MODEL.objects.all()
    serializer_class = UserSerializerWithToken
    permission_classes = [IsAdminUser,]


class AdminUserDashboardUserManager(RetrieveUpdateDestroyAPIView):
    queryset = USER_MODEL.objects.all()
    serializer_class = UserSerializerWithToken
    permission_classes = [IsAdminUser,]
