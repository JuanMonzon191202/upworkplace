# Django
from django.contrib.auth import authenticate

# RestFramework
from rest_framework.response import Response

# Jwt
from rest_framework_simplejwt.views import TokenObtainPairView

# User
from server.apps.auth.serializers import TokenSerializer, UserCustomSerializer

from server.apps.alumn.models import Alumn
from server.apps.alumn.serializers import AlumnSerializer
from server.apps.jobs.models import Company
from server.apps.jobs.serializers import CompanySerializer


class Login(TokenObtainPairView):
    serializer_class = TokenSerializer

    def post(self, request, *args, **kwargs):
        username = request.data.get("username", "")
        password = request.data.get("password", "")
        user = authenticate(username=username, password=password)

        if user:
            login_serializer = self.serializer_class(data=request.data)
            if login_serializer.is_valid():
                user_serializer = UserCustomSerializer(user)
                profile = {}
                if user_serializer.data["roles"] == "ALUMNO":
                    try:
                        alumn = Alumn.objects.get(user=user)
                        profile["alumn"] = AlumnSerializer(instance=alumn).data
                    except:
                        pass
                if user_serializer.data["roles"] == "EMPRESA":
                    try:
                        alumn = Company.objects.get(user=user)
                        profile["company"] = CompanySerializer(instance=alumn).data
                    except:
                        pass

                data = {
                    "token": {
                        "access": login_serializer.validated_data.get("access"),
                        "refresh": login_serializer.validated_data.get("refresh"),
                    },
                    "user": {
                        **user_serializer.data,
                        **profile,
                    },
                }

                return Response(data, status=201)
            return Response(
                {"error": "Correo o contraseña incorrectos"},
                status=400,
            )
        return Response(
            {"error": "Correo o contraseña incorrectos"},
            status=400,
        )
