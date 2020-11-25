from django.urls import path, include
from rest_framework.routers import DefaultRouter

from recipe import views


router = DefaultRouter()
router.register('products', views.RecipeViewSet)

app_name = 'product'

urlpatterns = [
    path('', include(router.urls))
]
