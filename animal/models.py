from django.db import models


# Create your models here.
class Animal (models.Model):
    kind = models.CharField(max_length=100)
    age = models.IntegerField()

    def __str__(self):
        return f'Вид: {self.kind} ; Возраст; {self.age}'

