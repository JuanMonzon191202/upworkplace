from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

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
            'puesto': instance.puesto,
            'modalidad': instance.modalidad,
            'nombreEmpresa': instance.nombreEmpresa,
            'nombreConsultante': instance.nombreConsultante,
            'telefono': instance.telefono,
            'email': instance.email,
            'carrera': instance.carrera.nombre,
            'activo': instance.activo,
            'alta': instance.alta,

            #

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


class EmpresaSolicitudCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmpresaSolicitud
        exclude = ('carrera',)


class EmpresaSolicitudSerializer(ModelSerializer):
    carrera = CarreraSerializer(read_only=True)

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['carrera'] = CarreraSerializer(instance.carrera).data
        return representation

    def update(self, instance, validated_data):
        instance.activo = validated_data.get('activo', instance.activo)
        instance.aceptada = validated_data.get('aceptada', instance.aceptada)
        instance.save()
        return instance

    class Meta:
        model = EmpresaSolicitud
        fields = '__all__'
