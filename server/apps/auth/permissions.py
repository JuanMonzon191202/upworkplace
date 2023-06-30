from rest_framework.permissions import (
    BasePermission,
)


class IsAlumnUser(BasePermission):
    """
    Allows access only to authenticated users.
    """

    def has_permission(self, request, view):
        return bool(
            request.user
            and request.user.is_authenticated
            and "ALUMNO" == request.auth.payload["roles"]
        )


class IsAdminUser(BasePermission):
    """
    Allows access only to authenticated users.
    """

    def has_permission(self, request, view):
        return bool(
            request.user
            and request.user.is_authenticated
            and "ADMIN" == request.auth.payload["roles"]
        )


class OrReadSelect(BasePermission):
    def has_permission(self, request, view):
        return bool(view.action == "select")


class IsTeacherUser(BasePermission):
    def has_permission(self, request, view):
        return bool(
            request.user
            and request.user.is_authenticated
            and "EMPRESA" == request.auth.payload["roles"]
        )
