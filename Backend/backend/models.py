from django.db import models
from django.conf import settings


author_user = settings.AUTH_USER_MODEL


class Address(models.Model):
    address = models.CharField(max_length=40)
    city = models.CharField(max_length=50)
    postalCode = models.CharField(max_length=30)
    country = models.CharField(max_length=30)

    def __str__(self):
        return self.address


class Order(models.Model):
    user = models.ForeignKey(author_user, on_delete=models.SET_NULL, null = True)
    paymentMethod = models.CharField(max_length=50, null=True, blank=True)
    shippingPrice = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    discount = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateField(auto_now_add=False, null=True, blank=True)
    isShipped = models.BooleanField(default=False)
    shippedAt = models.DateField(auto_now_add=False, null=True, blank=True)
    createdAt = models.DateField(auto_now_add=True)
    address = models.ForeignKey(Address, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return str(self.createdAt)


class Review(models.Model):
    user = models.ForeignKey(author_user, on_delete=models.SET_NULL, null=True)
    product = models.ForeignKey('Product', on_delete=models.CASCADE, null=True, related_name='reviews')
    title = models.CharField(max_length=50, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True)
    comment = models.TextField(null=True, blank=True)
    createdAt = models.DateField(auto_now_add=True)

    def __str__(self):
        return str(self.rating)

class Product(models.Model):
    image = models.CharField(max_length=50)
    name = models.CharField(max_length=200, null=True, blank=True)
    brand = models.ForeignKey('Brand', on_delete=models.SET_NULL, null=True)
    category = models.ForeignKey('Category', on_delete=models.SET_NULL, null=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    reviewNum = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    qtylnStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name


class Brand(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.IntegerField()

    def __str__(self):
        return str(self.name)


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=5, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    image = models.ImageField(upload_to='')

    def __str__(self):
        return str(self.name)
