from rest_framework import viewsets

from animal.models import Animal
from animal.serializers import AnimalSerializer

class ViewAnimal(viewsets.ModelViewSet):
    queryset = Animal.objects.all()  # обозначили, откуда берем данные

    serializer_class = AnimalSerializer