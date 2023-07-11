from rest_framework.routers import DefaultRouter
from .controllers import *

router = DefaultRouter()

router.register(r"carees", CareerController, basename="caree")

urlpatterns = router.urls
