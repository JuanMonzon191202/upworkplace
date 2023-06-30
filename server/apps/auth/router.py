from django.urls import path
from server.apps.auth.controllers import Login
from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenVerifyView,
    TokenBlacklistView,
)


urlpatterns = [
    path("login/", Login.as_view(), name="login"),
    path(
        "refresh/",
        TokenRefreshView.as_view(),
        name="token_refresh",
    ),
    path(
        "verify/",
        TokenVerifyView.as_view(),
        name="token_verify",
    ),
    path(
        "blacklist/",
        TokenBlacklistView.as_view(),
        name="token_blacklist",
    ),
]
