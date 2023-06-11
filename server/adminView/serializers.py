from rest_framework.serializers import ModelSerializer
from .models import *


class AlumnoSerializer(ModelSerializer):
    def to_representation(self, instance: Alumno):
        return{
            'id': instance.pk,
            'Carrera': instance.Carrera.pk,
            'nombre': instance.nombre,
            'apellidos': instance.apellidos,
            'matricula': instance.matricula,
            'emailAlumno': instance.emailAlumno,
            'telefonoAlumno': instance.telefonoAlumno,

        }

    class Meta:
        model = Alumno
        fields = '__all__'


class PropuestaSerializer(ModelSerializer):
    def to_representation(self, instance: Propuesta):
        return{
            'id': instance.pk,
            'nombrePropuesta': instance.nombrePropuesta,
            'descriptionPropuesta': instance.descriptionPropuesta,
            'requisitos': instance.requisitos,
            'nombreEmpresa': instance.nombreEmpresa.pk,
            'carrera': instance.carrera.pk,

        }

    class Meta:
        model = Propuesta
        fields = '__all__'


class CarreraSerializer(ModelSerializer):
    def to_representation(self, instance: Carrera):
        return{
            'id': instance.pk,
            'nombre': instance.nombre,

        }

    class Meta:
        model = Carrera
        fields = '__all__'


class EmpresaSerializer(ModelSerializer):
    def to_representation(self, instance: Empresa):
        return{
            'id': instance.pk,
            'nombreEmpresa': instance.nombreEmpresa,
            'nombreResponsable': instance.nombreResponsable,
            'emailResponsable': instance.emailResponsable,
            'telefonoResponsable': instance.telefonoResponsable,
            'carrera': instance.carrera.nombre,

        }

    class Meta:
        model = Empresa
        fields = '__all__'


class EmpresaSolicitudSerializer(ModelSerializer):
    def to_representation(self, instance: EmpresaSolicitud):
        return{
            'id': instance.pk,
            'nombreEmpresa': f"{instance.nombreEmpresa}",
            'nombreProyecto': instance.nombreProyecto,
            'description': instance.description,
            'puesto': instance.puesto,
            'nombreConsultante': instance.nombreConsultante,
            'telefono': instance.telefono,
            'email': instance.email,
            'carrera': instance.carrera.nombre,
            'activo': instance.activo,
        }

    class Meta:
        model = EmpresaSolicitud
        fields = '__all__'


# //////////////////////////////////////////////////////////
