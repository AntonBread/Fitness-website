from django.db import models

class Demo(models.Model):
    name = models.CharField(max_length=100)

class User(models.Model):
    # ID_User = models.AutoField()
    Firstname = models.CharField(max_length=50)
    Lastname = models.CharField(max_length=50)
    Datebirth = models.DateField()
    Sex = models.BooleanField()
    Height = models.IntegerField()
    Email = models.CharField(max_length=50)
    Password = models.CharField(max_length=50)

    # def UserCreate(self):

class Training(models.Model):
    LinkVideo = models.CharField(max_length=50)
    TimeMovies = models.CharField(max_length=50)
    Inventory = models.CharField(max_length=50)
    StudyArea = models.CharField(max_length=50)

class Exercise(models.Model):
    Pictures = models.CharField(max_length=200)
    Description = models.CharField(max_length=1000)
    MuscleGroups = models.CharField(max_length=50)
    NumberOfRepetitions = models.IntegerField()
    ExerciseTime = models.CharField(max_length=50)

class Statistics(models.Model):
    ID_User = models.ForeignKey(User, on_delete=models.CASCADE)
    Weight = models.IntegerField()
    Breast = models.DecimalField(decimal_places=1, max_digits=4)
    Waist = models.DecimalField(decimal_places=1, max_digits=4)
    Hips = models.DecimalField(decimal_places=1, max_digits=4)
