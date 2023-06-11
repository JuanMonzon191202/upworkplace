from rest_framework.routers import DefaultRouter
from .views import *


router = DefaultRouter(r'')
# Alumno, Propuesta, Carrera, Empresa, EmpresaSolicitud

router.register(r'Alumnos', AlumnoView, basename='Alumnos')
router.register(r'Propuesta', PropuestaView, basename='Propuesta')
router.register(r'Carrera', CarreraView, basename='Carrera')
router.register(r'Empresa', EmpresaViwe, basename='Empresa')
router.register(r'EmpresaSolicitud', EmpresaSolicitudView,
                basename='EmpresaSolicitud')


urlpatterns = router.urls
