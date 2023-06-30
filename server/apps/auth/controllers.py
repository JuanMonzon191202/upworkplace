# Django
from django.contrib.auth import authenticate

# RestFramework
from rest_framework.response import Response

# Jwt
from rest_framework_simplejwt.views import TokenObtainPairView

# User
from server.apps.auth.serializers import TokenSerializer, UserCustomSerializer

# from server.apps.alumn.models import Alumn
# from server.apps.alumn.serializers import AlumnSerializer


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
                # if "ALUMNO" in user_serializer.data["roles"]:
                #     alumn = Alumn.objects.get(user=user)
                #     profile["alumn"] = alumn.pk
                #     profile["career"] = {
                #         "id": alumn.group.career.id,
                #         "name": alumn.group.career.name,
                #     }
                #     profile["quarter"] = alumn.group.quarter

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
