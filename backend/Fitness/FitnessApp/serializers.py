from rest_framework import serializers
from .models import Demo, User, Training, Exercise, Statistics


class DemoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Demo
        fields = ('id', 'name')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('Firstname', 'Lastname', 'Datebirth', 'Sex', 'Height', 'Email', 'Password')

class TrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = ('LinkVideo', 'TimeMovies', 'Inventory', 'StudyArea')

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ('Pictures', 'Description', 'MuscleGroups', 'NumberOfRepetitions', 'ExerciseTime')

class StatisticsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Statistics
        fields = ('ID_User', 'Weight', 'Breast', 'Waist', 'Hips')
