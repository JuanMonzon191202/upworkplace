from server.apps.base.viewsets import GenericViewSet
from rest_framework.response import Response
from rest_framework.decorators import action

from server.apps.base.models import Career
from server.apps.base.filters import CareerFilter
from server.apps.base.serializers import CareerSerializer, CareerSelectSerializer


class CareerController(GenericViewSet):
    model = Career
    filterset_class = CareerFilter
    search_fields = ("name", "id")
    serializers = {
        "default": CareerSerializer,
        "select": CareerSelectSerializer,
    }

    @action(detail=False, methods=["get"], url_path="select")
    def select(self, request):
        queryset = self.filter_queryset(
            self.model.objects.filter(is_active=True).order_by("-pk")
        )
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
