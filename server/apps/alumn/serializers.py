from rest_framework.serializers import ModelSerializer
from .models import *
from server.apps.base.serializers import CareerSelectSerializer


# -----> Alumno <----
class AlumnSerializer(ModelSerializer):
    career = CareerSelectSerializer()

    class Meta:
        model = Alumn
        fields = "__all__"
