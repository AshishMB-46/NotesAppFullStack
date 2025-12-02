from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NoteviewSet


router=DefaultRouter()



router.register('notes',NoteviewSet,basename='notes')


urlpatterns = [
    path('', include(router.urls)),
]