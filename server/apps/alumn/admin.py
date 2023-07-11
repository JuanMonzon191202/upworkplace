from django.contrib import admin
from .models import *


@admin.register(Alumn)
class AlumnAdmin(admin.ModelAdmin):
    list_display = (
        "enrollment",
        "first_name",
        "last_name",
        "second_last_name",
        "career",
    )
    list_display_links = ("enrollment",)
    list_filter = ("career",)
