from django.urls import path, include
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register(r'demo', views.DemoListCreate)
router.register(r'user', views.UserListCreate)
router.register(r'training', views.TrainingListCreate)
router.register(r'exercise', views.ExerciseListCreate)
router.register(r'statistics', views.StatisticsListCreate)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # path('api-demo/', views.DemoListCreate.as_view()),
    # path('api-user/', views.UserListCreate.as_view()),
    # path('api-training/', views.TrainingListCreate.as_view()),
    # path('api-exercise/', views.ExerciseListCreate.as_view()),
    # path('api-statistics/', views.StatisticsListCreate.as_view()),
]
