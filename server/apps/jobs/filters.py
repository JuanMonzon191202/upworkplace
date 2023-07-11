from django_filters.rest_framework import FilterSet
from .models import *


# -----> Empresa <-----
class CompanyFilter(FilterSet):
    class Meta:
        model = Company
        fields = ["is_active"]


# -----> Vacantes <-----
class JobFilter(FilterSet):
    class Meta:
        model = Job
        fields = ["company", "workplace", "job_type", "is_active", "career"]


# -----> Vacantes <-----
class ApplicationFilter(FilterSet):
    class Meta:
        model = Application
        fields = ["job", "alumn", "status"]
