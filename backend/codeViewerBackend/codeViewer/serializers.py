from rest_framework import serializers
from .models import *


class CompetitionSeriesSerializer(serializers.ModelSerializer):
    competitions_count = serializers.SerializerMethodField('get_competitions_count')
    tasks_count = serializers.SerializerMethodField('get_tasks_count')

    class Meta:
        model = CompetitionSeries
        fields = '__all__'

    def get_competitions_count(self, competition_series):
        return len(Competition.objects.filter(series=competition_series))

    def get_tasks_count(self, competition_series):
        competition_list = Competition.objects.filter(series=competition_series)
        return len(Task.objects.filter(competition__in=competition_list))


class CompetitionSerializer(serializers.ModelSerializer):
    tasks_count = serializers.SerializerMethodField('get_tasks_count')

    class Meta:
        model = Competition
        fields = '__all__'

    def get_tasks_count(self, competition_series):
        return len(Task.objects.filter(competition=competition_series))


class TaskSerializer(serializers.ModelSerializer):
    solutions_count = serializers.SerializerMethodField('get_solutions_count')

    class Meta:
        model = Task
        fields = '__all__'

    def get_solutions_count(self, task):
        return len(Solution.objects.filter(task=task))


class SolutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solution
        fields = '__all__'
