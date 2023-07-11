from django.contrib.auth.password_validation import validate_password

from rest_framework_simplejwt.serializers import (
    TokenObtainPairSerializer,
)
from rest_framework.serializers import (
    Serializer,
    ValidationError,
    ModelSerializer,
)
from rest_framework.fields import CharField
from server.apps.user.models import User, Role


class RoleSerializer(ModelSerializer):
    def to_representation(self, instance: Role):
        return instance.name

    class Meta:
        model = Role
        fields = ("name",)


class TokenSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user: User):
        token = super().get_token(user)

        # add custom claims
        print(user.roles)
        token["roles"] = user.roles.name
        return token


class UserCustomSerializer(ModelSerializer):
    roles = RoleSerializer()

    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "roles",
        )


class ChangePasswordSerializer(ModelSerializer):
    currentPassword = CharField(max_length=128, write_only=True)
    newPassword = CharField(max_length=128, min_length=8, write_only=True)
    confirmPassword = CharField(max_length=128, min_length=8, write_only=True)

    def validate_currentPassword(self, value):
        user = self.context["request"].user
        if not user.check_password(value):
            raise ValidationError("La contraseña no coincide con la actual")
        return value

    def validate_confirmPassword(self, data):
        if data != self.initial_data["newPassword"]:
            raise ValidationError("Las contraseñas no coinciden")
        validate_password(data, self.context["request"].user)
        return data

    def save(self, **kwargs):
        password = self.validated_data["newPassword"]
        user = self.context["request"].user

        user.set_password(password)
        user.save()
        return user

    class Meta:
        model = User
        fields = ("currentPassword", "newPassword", "confirmPassword")


class ChangePasswordUserSerializer(Serializer):
    newPassword = CharField(max_length=128, min_length=8, write_only=True)
    confirmPassword = CharField(max_length=128, min_length=8, write_only=True)

    def validate_confirmPassword(self, data):
        from django.contrib.auth.password_validation import validate_password

        if data != self.initial_data["newPassword"]:
            raise ValidationError("Las contraseñas no coinciden")
        validate_password(data, self.context["request"].user)
        return data
