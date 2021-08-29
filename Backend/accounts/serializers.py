from rest_framework import serializers

from .models import CustomUser


class RegistrationSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(
        style={'input_type': 'password'},
        write_only=True
    )

    class Meta:
        model = CustomUser
        fields = ['username','email','password','password2']
        extra_kwargs = {
            'password' : {'write_only': True,
            'style' : {'input_type': 'password'}
            }
        }

    def save(self):
        user = CustomUser(
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
