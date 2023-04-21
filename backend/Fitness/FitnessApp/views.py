from django.shortcuts import render
from .models import Demo, User, Training, Exercise, Statistics
from .serializers import DemoSerializer, UserSerializer, TrainingSerializer, ExerciseSerializer, StatisticsSerializer
from rest_framework import viewsets


class DemoListCreate(viewsets.ModelViewSet):
    queryset = Demo.objects.all()
    serializer_class = DemoSerializer

class UserListCreate(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TrainingListCreate(viewsets.ModelViewSet):
    queryset = Training.objects.all()
    serializer_class = TrainingSerializer

class ExerciseListCreate(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer

class StatisticsListCreate(viewsets.ModelViewSet):
    queryset = Statistics.objects.all()
    serializer_class = StatisticsSerializer