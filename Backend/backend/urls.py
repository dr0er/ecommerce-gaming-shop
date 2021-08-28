from django.urls import path

from . import views

urlpatterns = [
    path("product/<int:pk>/", views.ProductDetailView.as_view(),
        name='product_detail'
    ),
]
