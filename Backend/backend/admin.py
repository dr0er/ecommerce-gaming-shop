from django.contrib import admin
from .models import *

class AddressAdmin(admin.ModelAdmin):
    list_display = ('city','address', 'country')

admin.site.register(Address, AddressAdmin)

class OrderAdmin(admin.ModelAdmin):
    list_display = ('createdAt','user', 'totalPrice', 'isPaid', 'isShipped')

admin.site.register(Order, OrderAdmin)

class ReviewAdmin(admin.ModelAdmin):
    list_display = ('user','product', 'rating', 'createdAt')

admin.site.register(Review, ReviewAdmin)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'brand', 'category', 'price', 'qtyInStock')

admin.site.register(Product, ProductAdmin)

class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'name', 'qty', 'price')

admin.site.register(OrderItem, OrderItemAdmin)
admin.site.register(Brand)
admin.site.register(Category)
