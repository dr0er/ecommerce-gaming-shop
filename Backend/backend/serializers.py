from rest_framework import serializers
from .models import Address, Order, Review, Product, Brand, Category, OrderItem


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'

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
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):

    reviews = ReviewSerializer(many=True)
    brand = serializers.SlugRelatedField(slug_field='name', read_only=True)
    category = serializers.SlugRelatedField(slug_field='name', read_only=True)

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
                    'qtyInStock',
                    'createdAt',
                    'reviews',)

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'
