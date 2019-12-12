from django.urls import path, include
from rest_framework.routers import DefaultRouter

from animal.views import ViewAnimal

router = DefaultRouter()  # создали объект класса
router.register('animal', ViewAnimal)  # вызвали у него метод, который записывает путь

urlpatterns = [
    path('', include(router.urls))
]