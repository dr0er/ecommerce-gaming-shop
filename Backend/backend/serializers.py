from rest_framework import serializers
from .models import Adress, User, Order, Review, Product, Brand, Category, OrderItem


class AdressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adress
        fields = ('id',
                    'order',
                    'adress',
                    'city',
                    'postalCode',
                    'country')

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id',
                    'user',
                    'paymentMethod',
                    'shippingPrice',
                    'discount',
                    'totalPrice',
                    'isPaid',
                    'paidAt',
                    'isShipped',
                    'shippedAt',
                    'createdAt')

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id',
                    'user',
                    'product',
                    'title',
                    'rating',
                    'comment',
                    'createdAt')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id',
                    'image',
                    'name',
                    'brand',
                    'category',
                    'description',
                    'rating',
                    'reviewNum',
                    'price',
                    'qtylnStock',
                    'createdAt')

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ('id',
                    'name')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id',
                    'name')

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ('id',
                    'order',
                    'product',
                    'name',
                    'qty',
                    'price',
                    'image')

