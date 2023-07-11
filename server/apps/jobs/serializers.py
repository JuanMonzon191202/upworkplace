from rest_framework.serializers import ModelSerializer
from .models import *
from server.apps.alumn.serializers import AlumnSerializer


# -----> Empresa <-----
class CompanySerializer(ModelSerializer):
    class Meta:
        model = Company
        exclude = ("user",)


class CompanyJobSerializer(ModelSerializer):
    class Meta:
        model = Company
        fields = ("name", "logo", "email", "phone")


# -----> Vacantes <-----
class JobSerializer(ModelSerializer):
    company = CompanyJobSerializer()

    class Meta:
        model = Job
        fields = "__all__"


class JobCreateSerializer(ModelSerializer):
    class Meta:
        model = Job
        exclude = ("updated_at", "created_at")


class JobUpdateSerializer(ModelSerializer):
    class Meta:
        model = Job
        exclude = ("company", "updated_at", "created_at")


# -----> Postulaciones <-----
class ApplicationSerializer(ModelSerializer):
    job = JobSerializer(read_only=True)
    alumn = AlumnSerializer(read_only=True)

    class Meta:
        model = Application
        fields = "__all__"


class ApplicationCreateSerializer(ModelSerializer):
    class Meta:
        model = Application
        fields = ("job", "alumn", "cv")


class ApplicationUpdateSerializer(ModelSerializer):
    class Meta:
        model = Application
        fields = ("message", "interview_date", "status")
