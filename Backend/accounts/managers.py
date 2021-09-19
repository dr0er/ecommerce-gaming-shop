from django.contrib.auth.base_user import BaseUserManager

from django.utils.translation import ugettext_lazy as _


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        if not user.username:
            user.username = email
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        user = self.create_user(
            email=self.normalize_email(email),
            password=password)
        user.username = email
        user.is_staff = True
        user.is_superuser = True
        user.is_active = True
        user.save()
        return user
