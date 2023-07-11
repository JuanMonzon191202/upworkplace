"""URL configuration for core project."""

from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = []

urlpatterns += static(
    settings.MEDIA_URL,
    document_root=settings.MEDIA_ROOT,
)
urlpatterns += static(
    settings.STATIC_URL,
    document_root=settings.STATIC_ROOT,
)

urlpatterns += [
    path("admin/", admin.site.urls),
    path(r"swagger/", include("server.apps.base.swagger")),
    path(r"v1/", include("server.apps.auth.router")),
    path(r"v1/", include("server.apps.user.router")),
    path(r"v1/", include("server.apps.base.router")),
    path(r"v1/", include("server.apps.jobs.router")),
    path("", TemplateView.as_view(template_name="index.html"), name="index"),
    re_path(
        r"^(?:.*)/?$", TemplateView.as_view(template_name="index.html"), name="index"
    ),
]
