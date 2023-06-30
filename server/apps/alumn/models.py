from django.db.models import *
from server.apps.user.models import User
from server.apps.base.models import Career


# -----Tabla Alumno----
class Alumn(Model):
    enrollment = BigAutoField(
        "Matrícula", auto_created=True, primary_key=True, serialize=False
    )

    """Datos Personales"""
    first_name = CharField("Nombre(s)", max_length=50)
    last_name = CharField("Apellido Paterno", max_length=50)
    second_last_name = CharField("Apellido Materno", max_length=50)

    """ Datos de contacto """
    email = EmailField("Correo", null=True)
    phone = CharField("Teléfono", max_length=15)

    """Datos escolares"""
    career = ForeignKey(Career, on_delete=RESTRICT, verbose_name="Carrera")

    """Metadata"""
    user = OneToOneField(User, on_delete=RESTRICT, verbose_name="Usuario")
    created_at = DateTimeField("Fecha de registro", auto_now=False, auto_now_add=True)
    updated_at = DateTimeField(
        "Ultima actualización", auto_now=True, auto_now_add=False
    )
