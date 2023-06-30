from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as UserA
from django.contrib.auth.models import Group, Permission
from .models import User, Role
from django.utils.translation import gettext_lazy as _


admin.site.register(Role)
# admin.site.register(Group)
admin.site.register(Permission)


class UserAdmin(UserA):
    fieldsets = (
        (None, {"fields": ("username", "password")}),
        (
            _("Personal info"),
            {
                "fields": (
                    "first_name",
                    "last_name",
                    "email",
                )
            },
        ),
        (
            _("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "roles",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
        (_("Important dates"), {"fields": ("last_login", "date_joined")}),
    )
    readonly_fields = ("last_login", "date_joined")

    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("username", "roles", "password1", "password2"),
            },
        ),
    )


admin.site.register(User, UserAdmin)
