from django.contrib import admin

from .models import Alumno, Propuesta, Carrera, Empresa, EmpresaSolicitud

# Register your models here.
admin.site.register(Alumno)
admin.site.register(Propuesta)
admin.site.register(Carrera)
admin.site.register(Empresa)
admin.site.register(EmpresaSolicitud)
# Carreta