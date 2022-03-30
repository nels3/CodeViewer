from django.http import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser

from .serializers import *
from .models import *
from rest_framework.decorators import api_view


@api_view(['GET'])
def competition_series(request):
    if request.method == 'GET':
        series_list = CompetitionSeries.objects.all()
        serializer = CompetitionSeriesSerializer(series_list, many=True)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)


@api_view(['GET', 'POST'])
def competition_series_details(request):
    if request.method == 'GET':
        competition_id = request.query_params.get('id', None)
        series = CompetitionSeries.objects.get(id=competition_id)
        serializer = CompetitionSeriesSerializer(series, many=False)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = CompetitionSeriesSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED, safe=False)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST, safe=False)


@api_view(['GET', 'POST'])
def competitions(request):
    if request.method == 'GET':
        series_name = request.query_params.get('series', None)
        if series_name:
            if CompetitionSeries.objects.filter(name=series_name).exists():
                series = CompetitionSeries.objects.get(name=series_name)
                competition_list = Competition.objects.filter(series=series)
            else:
                return JsonResponse({}, status=status.HTTP_400_BAD_REQUEST)
        else:
            competition_list = Competition.objects.all()
        serializer = CompetitionSerializer(competition_list, many=True)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)


@api_view(['GET', 'POST'])
def competition_details(request):
    if request.method == 'GET':
        competition_name = request.query_params.get('name', None)
        if competition_name:
            if Competition.objects.filter(name=competition_name).exists():
                competition = Competition.objects.get(name=competition_name)
            else:
                return JsonResponse({}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return JsonResponse({}, status=status.HTTP_400_BAD_REQUEST)

        serializer = CompetitionSerializer(competition, many=False)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = CompetitionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED, safe=False)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def tasks(request):
    if request.method == 'GET':

        series_name = request.query_params.get('series', None)
        competition_name = request.query_params.get('competition', None)

        if competition_name and competition_name is None:
            if Competition.objects.filter(name=competition_name).exists():
                competition = Competition.objects.get(name=competition_name)
                task_list = Task.objects.filter(competition=competition)
            else:
                return JsonResponse({}, status=status.HTTP_400_BAD_REQUEST)
        elif series_name:
            if CompetitionSeries.objects.filter(name=series_name).exists():
                series = CompetitionSeries.objects.get(name=series_name)
                competition_list = Competition.objects.filter(series=series)
                task_list = Task.objects.filter(competition__in=competition_list)
            else:
                return JsonResponse({}, status=status.HTTP_400_BAD_REQUEST)
        else:
            task_list = Task.objects.all()

        serializer = TaskSerializer(task_list, many=True)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)


@api_view(['GET', 'POST'])
def task_details(request):
    if request.method == 'GET':
        task_id = request.query_params.get('id', None)
        if task_id:
            if Task.objects.filter(id=task_id).exists():
                task = Task.objects.get(id=task_id)
            else:
                return JsonResponse({}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return JsonResponse({}, status=status.HTTP_400_BAD_REQUEST)

        serializer = TaskSerializer(task, many=False)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TaskSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED, safe=False)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST, safe=False)


@api_view(['GET', 'POST'])
def solutions(request):
    if request.method == 'GET':
        task_list = Solution.objects.all()
        serializer = SolutionSerializer(task_list, many=True)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)


@api_view(['GET', 'POST'])
def solution_details(request):
    if request.method == 'GET':
        solution_id = request.query_params.get('id', None)
        if solution_id:
            if Solution.objects.filter(id=solution_id).exists():
                solution = Solution.objects.get(id=solution_id)
            else:
                return JsonResponse({}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return JsonResponse({}, status=status.HTTP_400_BAD_REQUEST)

        serializer = SolutionSerializer(solution, many=False)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = SolutionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED, safe=False)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST, safe=False)

