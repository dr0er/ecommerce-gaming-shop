from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib import auth
from rest_framework_simplejwt.tokens import RefreshToken

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


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = USER_MODEL
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'date_of_birth', 'info', 'address', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'password']

    def login(self, request):
        email = request.POST['email']
        password = request.POST['password']
        user = auth.authenticate(email=email, password=password)
        token = Token.objects.create(user=user)
        # for testing email='email', password='password'
        # for production: email=email, password=password

        if user is not None and user.is_active:
            # correct password and user is marked as active
            auth.login(request, user)
            print('login')
        else:
            print('login error')

    def logout(self, request):
        auth.logout(request)
        print('logout')
