from django.db import models
import bcrypt
# Create your models here.


class Carrera(models.Model):
    nombre = models.CharField('Nombre', max_length=50,
                              help_text='nombre de la carrera')

    class Meta:
        verbose_name = ("Carrera")
        verbose_name_plural = ("Carreras")

    def __str__(self):
        return self.nombre


# Carreta


class Alumno(models.Model):
    Carrera = models.ForeignKey(Carrera, on_delete=models.PROTECT)

    nombre = models.CharField('Nombres', max_length=50,
                              help_text='nombre del alumno')
    apellidos = models.CharField(
        'Apellidos', max_length=100, help_text='apellidos del alumno')
    matricula = models.CharField(
        'Matricula', max_length=20, help_text='Matricula del alumno')
    contrasenia = models.TextField('requisitos', blank=False)
    emailAlumno = models.EmailField('Email', max_length=254,
                                    help_text=' email del alumno')
    telefonoAlumno = models.CharField('telefono', max_length=50)

    class Meta:
        verbose_name = ("Alumno")
        verbose_name_plural = ("Alumnos")

    def __str__(self):
        return self.nombre

    def nombre_carrera(self):
        return self.carrera.nombre


class Empresa(models.Model):
    nombreEmpresa = models.CharField('nombreEmpresa', max_length=50)
    nombreResponsable = models.CharField('nombreResponsable', max_length=50)
    emailResponsable = models.EmailField('email', max_length=50)
    telefonoResponsable = models.CharField('telefono', max_length=50)
    carrera = models.ForeignKey(Carrera, on_delete=models.PROTECT)

    # nombreConsultante = models.CharField('Cnombre', max_length=100)
    # telefono = models.CharField('telefono', max_length=50)
    # email = models.EmailField('email', max_length=254)
    # carrera = models.ForeignKey(Carrera, on_delete=models.PROTECT)

    class Meta:
        verbose_name = ("Empresa")
        verbose_name_plural = ("Empresas")

    def __str__(self):
        return f'{self.nombreEmpresa}'

    def nombre_empresa(self):
        return self.nombreEmpresa


class Propuesta(models.Model):
    # nombre del proyecto
    nombrePropuesta = models.CharField('nombre', max_length=50)
    # descripcion del proyecto
    descriptionPropuesta = models.TextField('Descipcion', blank=True)

    requisitos = models.TextField('requisitos', blank=True)
    nombreEmpresa = models.ForeignKey(Empresa, on_delete=models.PROTECT)
    carrera = models.ForeignKey(Carrera, on_delete=models.PROTECT)
    # activo = models.BooleanField('activo', default=True)

    class Meta:
        verbose_name = ("Propuesta")
        verbose_name_plural = ("Propuestas")


class EmpresaSolicitud(models.Model):
    nombreEmpresa = models.CharField('nombre de empresa', max_length=50)
    nombreProyecto = models.CharField('nombre de proyecto', max_length=50)
    description = models.TextField('descripcion', blank=True)
    puesto = models.CharField('puesto', max_length=50,
                              help_text='puesto laboral')
    nombreConsultante = models.CharField('Cnombre', max_length=100)
    telefono = models.CharField('telefono', max_length=50)
    email = models.EmailField('email', max_length=254)
    carrera = models.ForeignKey(Carrera, on_delete=models.PROTECT)
    activo = models.BooleanField('activo', default=True)
    # aceptada = models.BooleanField('aceptada', default=False)

    class Meta:
        verbose_name = "EmpresaSolicitud"
        verbose_name_plural = "EmpresaSolicituds"

    def __str__(self):
        return self.nombreEmpresa
