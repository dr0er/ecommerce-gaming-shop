from rest_framework import serializers
from django.contrib import auth

from .utils import USER_MODEL
from .models import CustomUser


class RegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(
        style={'input_type': 'password'},
        write_only=True,
        max_length=16
    )

    class Meta:
        model = USER_MODEL
        fields = ['username', 'email', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True, 'max_length': 16,
                         'style': {'input_type': 'password'}
                         }
        }

    def save(self):
        user = USER_MODEL(
            username=self.validated_data['username'],
            email=self.validated_data['email'],
        )

        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords must match.'})

        user.set_password(password)
        user.is_active = True
        user.save()
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = USER_MODEL
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'is_active']


class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'password']

    def login(self, request):
        self.email = request.POST['email']
        self.password = request.POST['password']
        user = auth.authenticate(email=self.email, password=self.password)

        if user is not None and user.is_active:
            # correct password and user is marked as active
            auth.login(request, user)
            print('login')
        else:
            print('login error')

    @staticmethod
    def logout(self, request):
        auth.logout(request)
