from rest_framework import viewsets
from .models import NoteInfo
from .serializers import NoteSerializer


class NoteviewSet(viewsets.ModelViewSet):
    queryset=NoteInfo.objects.all()
    serializer_class=NoteSerializer