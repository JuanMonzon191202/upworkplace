from rest_framework.serializers import ModelSerializer
from .models import *


# -----> Carreras <-----
class CareerSerializer(ModelSerializer):
    class Meta:
        model = Career
        fields = "__all__"


class CareerSelectSerializer(ModelSerializer):
    class Meta:
        model = Career
        fields = ("id", "name")
