from rest_framework import serializers
from .models import *


class CompetitionSeriesSerializer(serializers.ModelSerializer):
    competitions_count = serializers.SerializerMethodField('get_competitions_count')
    tasks_count = serializers.SerializerMethodField('get_tasks_count')

    class Meta:
        model = CompetitionSeries
        fields = ['name', 'link', 'competitions_count', 'tasks_count']

    def get_competitions_count(self, competition_series):
        return len(Competition.objects.filter(series=competition_series))

    def get_tasks_count(self, competition_series):
        competition_list = Competition.objects.filter(series=competition_series)
        return len(Task.objects.filter(competition__in=competition_list))


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
