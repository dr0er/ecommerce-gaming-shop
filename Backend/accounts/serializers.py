from rest_framework import serializers

from .utils import USER_MODEL
from .models import CustomUser
from rest_framework_simplejwt.tokens import RefreshToken
from backend.serializers import AddressSerializer


class RegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(
        style={'input_type': 'password'},
        write_only=True,
        max_length=16
    )
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = USER_MODEL
        fields = ['username','email','password','password2','token']
        extra_kwargs = {
            'password' : {'write_only': True, 'max_length': 16,
            'style' : {'input_type': 'password'}
            },
            'username': {'required': True}
        }

    def get_token(self, user):
        token = RefreshToken.for_user(user)
        refresh = str(token)
        access = str(token.access_token)
        data = {
            "refresh": refresh,
            "access": access
        }
        return data

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
    address = serializers.SerializerMethodField()

    class Meta:
        model = USER_MODEL
        fields = ['id','username','email','first_name','last_name', 'date_of_birth', 'info', 'address', 'is_staff']

    def get_address(self, obj):
        try:
            address = AddressSerializer(obj.address, many=False).data
        except:
            address = False
        return address

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = USER_MODEL
        fields = ['id','username','email','first_name','last_name', 'date_of_birth', 'info', 'address', 'is_staff', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
