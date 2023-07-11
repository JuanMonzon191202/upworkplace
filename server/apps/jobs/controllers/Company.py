from server.apps.base.viewsets import GenericViewSet
from rest_framework.response import Response

from server.apps.jobs.models import Company
from server.apps.jobs.filters import CompanyFilter
from server.apps.jobs.serializers import CompanySerializer


class CompanyController(GenericViewSet):
    model = Company
    filterset_class = CompanyFilter
    search_fields = ("name", "id")
    serializers = {
        "default": CompanySerializer,
    }

    def retrieve(self, request, pk):
        data = self.get_object(pk)
        serializer = self.get_serializer(data)
        return Response(serializer.data)

    def list(self, request):
        queryset = self.filter_queryset(self.get_queryset())

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
