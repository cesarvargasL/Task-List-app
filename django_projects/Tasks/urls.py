from django.urls import path, include
from rest_framework import routers
from Tasks.views import TaskView

#api versioning
router = routers.DefaultRouter()
router.register(r"tasks", TaskView, "tasks")


urlpatterns = [
    path("api/v1", include(router.urls)),
]