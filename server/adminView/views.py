from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from rest_framework.viewsets import GenericViewSet
# Create your views here.

from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404


from .models import *

from .serializers import *


class AlumnoView(GenericViewSet):

    # ruta de uri para obtener un registro metodo post
    serializer_class = AlumnoSerializer

    def get_queryset(self):
        return Alumno.objects.all()

    def list(self, request):
        data = Alumno.objects.all().order_by("-pk")
        serializer = AlumnoSerializer(data, many=True)

        return Response(serializer.data)

    def create(self, request):
        serializer = AlumnoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data,
                status=201,
            )
        return Response(
            {'error': 'Error al crear el registro', 'errors': serializer.errors},
        )
    # ruta uri para obtener un registro oir su id metodo get

    def retrieve(self, request, pk=None):
        data = get_object_or_404(Alumno, pk=pk)

        serializer = self.serializer_class(data)
        return Response(serializer.data)

    def update(self, request, pk=None):
        objeto = get_object_or_404(Alumno, pk=pk)

        serializer = self.serializer_class(objeto, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(
                {'menssage': 'registro actualizado correctamente'}
            )
        return Response(
            {'error': 'Error en la actualizacion del regsitro',
                'errors': serializer.errors}, status=400
        )

# Carreta


class PropuestaView(ModelViewSet):
    serializer_class = PropuestaSerializer

    def get_queryset(self):
        return Propuesta.objects.all().order_by("-pk")

    def list(self, request):
        data = Propuesta.objects.all().order_by("-pk")
        serializer = PropuestaSerializer(data, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = PropuestaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response({'error': 'Error al crear el registro', 'errors': serializer.errors})

    def retrieve(self, request, pk=None):
        data = get_object_or_404(Propuesta, pk=pk)
        serializer = self.serializer_class(data)
        return Response(serializer.data)

    def update(self, request, pk=None):
        objeto = get_object_or_404(Propuesta, pk=pk)
        serializer = self.serializer_class(objeto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Registro actualizado correctamente'})
        return Response({'error': 'Error en la actualización del registro', 'errors': serializer.errors}, status=400)


class CarreraView(GenericViewSet):
    serializer_class = CarreraSerializer

    def get_queryset(self):
        return Carrera.objects.all().order_by('-pk')

    def list(self, request):
        data = Carrera.objects.all().order_by("-pk")
        serializer = CarreraSerializer(data, many=True)

        return Response(serializer.data)

    def create(self, request):
        serializer = CarreraSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(
            {'error': 'Error al crear el registro', 'errors': serializer.errors},
            status=400,
        )


    def retrieve(self, request, pk=None):
        data = get_object_or_404(Carrera, pk=pk)
        serializer = CarreraSerializer(data)
        return Response(serializer.data)

    def update(self, request, pk=None):
        objeto = get_object_or_404(Carrera, pk=pk)

        serializer = self.serializer_class(objeto, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(
                {'menssage': 'registro actualizado correctamente'}
            )
        return Response(
            {'error': 'Error en la actualizacion del regsitro',
                'errors': serializer.errors}, status=400
        )


class EmpresaViwe(GenericViewSet):
    serializer_class = EmpresaSerializer

    def get_queryset(self):
        return Empresa.objects.all()

    def list(self, request):
        data = Empresa.objects.all().order_by("-pk")
        serializer = EmpresaSerializer(data, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = EmpresaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data,
                status=201,
            )
        return Response(
            {'error': 'Error al crear el registro', 'errors': serializer.errors}, status=400,
        )

    def retrieve(self, request, pk=None):
        data = get_object_or_404(Empresa, pk=pk)
        serializer = EmpresaSerializer(data)

        return Response(serializer.data)

    def update(self, request, pk=None):
        objeto = get_object_or_404(Empresa, pk=pk)

        serializer = self.serializer_class(objeto, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(
                {'menssage': 'registro actualizado correctamente'}
            )
        return Response(
            {'error': 'Error en la actualizacion del regsitro',
                'errors': serializer.errors}, status=400
        )


class EmpresaSolicitudView(GenericViewSet):
    serializer_class = EmpresaSolicitudSerializer

    def get_queryset(self):
        return EmpresaSolicitud.objects.all().order_by('-pk')

    def list(self, request):
        data = EmpresaSolicitud.objects.all().order_by("-pk")
        serializer = EmpresaSolicitudSerializer(data, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = EmpresaSolicitudCreateSerializer(data=request.data)
        if serializer.is_valid():
            # Obtener el ID de la carrera desde la solicitud
            carrera_id = request.data.get('carrera')

            # Obtener la instancia de la carrera
            carrera = Carrera.objects.get(pk=carrera_id)
            # Guardar la solicitud con la instancia de la carrera
            serializer.save(carrera=carrera)
            return Response(
                serializer.data,
                status=201,
            )
        return Response(
            {'error': 'Error al crear el registro', 'errors': serializer.errors}, status=400,
        )

    def retrieve(self, request, pk=None):
        data = get_object_or_404(EmpresaSolicitud, pk=pk)
        serializer = EmpresaSolicitudSerializer(data)
        return Response(serializer.data)

    def update(self, request, pk=None):
        objeto = get_object_or_404(EmpresaSolicitud, pk=pk)

        serializer = self.serializer_class(objeto, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(
                {'message': 'Registro actualizado correctamente'}
            )
        return Response(
            {'error': 'Error en la actualización del registro', 'errors': serializer.errors}, status=400
        )
