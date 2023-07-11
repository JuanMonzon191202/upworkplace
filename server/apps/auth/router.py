from django.urls import path
from server.apps.auth.controllers import Login
from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenVerifyView,
    TokenBlacklistView,
)


urlpatterns = [
    path("auth/login/", Login.as_view(), name="login"),
    path(
        "auth/refresh/",
        TokenRefreshView.as_view(),
        name="token_refresh",
    ),
    path(
        "auth/verify/",
        TokenVerifyView.as_view(),
        name="token_verify",
    ),
    path(
        "auth/blacklist/",
        TokenBlacklistView.as_view(),
        name="token_blacklist",
    ),
]
