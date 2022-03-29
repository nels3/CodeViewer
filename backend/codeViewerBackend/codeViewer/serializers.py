from rest_framework import serializers
from .models import *


class CompetitionSeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompetitionSeries
        fields = '__all__'


class CompetitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Competition
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class SolutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solution
        fields = '__all__'
