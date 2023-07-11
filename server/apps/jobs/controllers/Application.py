from server.apps.base.viewsets import GenericViewSet
from rest_framework.response import Response

from server.apps.jobs.models import Application
from server.apps.jobs.filters import ApplicationFilter
from server.apps.jobs.serializers import (
    ApplicationSerializer,
    ApplicationCreateSerializer,
    ApplicationUpdateSerializer,
)


class ApplicationController(GenericViewSet):
    model = Application
    filterset_class = ApplicationFilter
    serializers = {
        "default": ApplicationSerializer,
        "create": ApplicationCreateSerializer,
        "partial_update": ApplicationUpdateSerializer,
    }

    def retrieve(self, request, pk):
        data = self.get_object(pk)
        serializer = self.get_serializer(data)
        return Response(serializer.data)

    def list(self, request):
        queryset = self.filter_queryset(self.get_queryset())

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Registro creado correctamente", **serializer.data}
            )

        return Response(
            {"error": "Error al crear el registro", "errors": serializer.errors},
            status=400,
        )

    def partial_update(self, request, pk):
        data = self.get_object(pk)
        serializer = self.get_serializer(data, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Registro actualizado correctamente"})

        return Response(
            {
                "error": "Error al actualizar el Registro",
                "errors": serializer.errors,
            },
            status=400,
        )

    def destroy(self, request, pk):
        try:
            application = Application.objects.filter(pk=pk)
            if application.exists():
                application.update(status="eliminado")
                return Response(
                    {"message": "Postulación eliminado correctamente"},
                    status=200,
                )
            else:
                return Response(
                    {"error": "Registro no encontrado."},
                    status=404,
                )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=500,
            )
