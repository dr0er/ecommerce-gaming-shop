from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from .managers import CustomUserManager
from backend.models import *

class CustomUser(AbstractUser):
    username = models.CharField(max_length='50', null=True, unique=True)
    first_name = models.CharField(max_length='50', null=True)
    last_name = models.CharField(max_length='50', null=True)
    email = models.EmailField(_('email adress'), unique=True)
    password = models.CharField(max_length='50', null=True)
    is_active = models.BooleanField(default=None, null=True)
    is_staff = models.BooleanField(default=None, null=True)
    date_of_birth = models.DateField(null=True, blank=True)
    infro = models.TextField(null=True, blank=True)
    address = models.ForeignKey(Address, on_delete=models.SET_NULL, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    object = CustomUserManager()

    def __str__(self):
        return self.email

