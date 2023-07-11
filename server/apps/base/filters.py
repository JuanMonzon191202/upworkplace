from django_filters.rest_framework import FilterSet
from .models import *


# -----> Carrera <-----
class CareerFilter(FilterSet):
    class Meta:
        model = Career
        fields = ["is_active"]
