from server.apps.base.viewsets import GenericViewSet
from rest_framework.response import Response

from server.apps.jobs.models import Job
from server.apps.jobs.filters import JobFilter
from server.apps.jobs.serializers import (
    JobSerializer,
    JobCreateSerializer,
    JobUpdateSerializer,
)


class JobController(GenericViewSet):
    model = Job
    filterset_class = JobFilter
    search_fields = ("title", "id", "company__name")
    serializers = {
        "default": JobSerializer,
        "create": JobCreateSerializer,
        "partial_update": JobUpdateSerializer,
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
