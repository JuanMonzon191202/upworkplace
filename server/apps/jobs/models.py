from django.db.models import *
from server.apps.user.models import User
from server.apps.alumn.models import Alumn
from server.apps.base.models import Career
from .choices import *


# -----> Empresa <-----
class Company(Model):
    name = CharField("Nombre", max_length=150)
    logo = ImageField("Logo", upload_to="company/logo", null=True)
    email = EmailField("Correo")
    phone = CharField("Teléfono", max_length=15)
    country = CharField("País", max_length=55, blank=True)
    address = CharField("Dirección", max_length=255, blank=True)
    user = OneToOneField(User, on_delete=CASCADE, verbose_name="Usuario")
    is_active = BooleanField("Activo", default=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "UP_CAT_COMPANY"
        verbose_name = "Compañía"
        verbose_name_plural = "Compañías"


# -----> Vacantes <-----
class Job(Model):
    company = ForeignKey(Company, on_delete=CASCADE)
    title = CharField("Titulo", max_length=55)
    workplace = CharField("Lugar de trabajo", max_length=10, choices=workplace_choices)
    location = CharField("Ubicación", max_length=55, null=False)
    job_type = CharField("Tipo de trabajo", max_length=15, choices=job_type_choices)
    description = TextField("Descripción")
    salary = FloatField("Salario")
    career = ForeignKey(Career, on_delete=RESTRICT, verbose_name="Carrera")
    is_active = BooleanField("Activo", default=True)
    created_at = DateTimeField("Fecha de creación", auto_now_add=True)
    updated_at = DateTimeField("Fecha de modifican", auto_now=True)

    def __str__(self):
        return f"{self.company} - {self.title}"

    class Meta:
        db_table = "UP_CAT_JOB"
        verbose_name = "Empleo"
        verbose_name_plural = "Empleos"


# -----> Postulaciones <-----
class Application(Model):
    job = ForeignKey(Job, on_delete=CASCADE, verbose_name="Empleo")
    alumn = ForeignKey(Alumn, on_delete=CASCADE, verbose_name="Alumno")
    cv = FileField("Currículo", upload_to="alumn/cv")
    message = TextField("Mensaje", null=True, blank=True, default=None)
    interview_date = DateTimeField(
        "Fecha para entrevista", null=True, blank=True, default=None
    )
    status = CharField(
        "Estatus",
        max_length=30,
        choices=application_status_choices,
        default="postulado",
    )
    created_at = DateTimeField("Fecha de creación", auto_now_add=True)
    updated_at = DateTimeField("Fecha de modifican", auto_now=True)

    def __str__(self):
        return f"{self.job.title} - {self.alumn}"

    class Meta:
        db_table = "UP_CAT_APPLICATION"
        verbose_name = "Aplicación"
        verbose_name_plural = "Aplicaciones"
