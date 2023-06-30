from django.db.models import *


# -----> Carreras <-----
class Career(Model):
    name = CharField("Nombre del programa académico", max_length=60)
    homosigla = CharField("Homo-sigla", max_length=10)
    is_active = BooleanField("Activo", default=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "UP_CAT_CAREER"
        verbose_name = "Carrera"
        verbose_name_plural = "Carreras"
