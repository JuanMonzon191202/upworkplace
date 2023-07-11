from rest_framework.routers import DefaultRouter
from .controllers import *

router = DefaultRouter()

router.register(r"company", CompanyController, basename="company")
router.register(r"jobs", JobController, basename="job")
router.register(r"applications", ApplicationController, basename="application")


urlpatterns = router.urls
