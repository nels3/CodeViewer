from django.urls import path

from . import views

urlpatterns = [
    path('competition/series/list', views.competition_series, name='series_list'),
    path('competition/series/details', views.competition_series_details, name='series_details'),
    path('competition/list', views.competitions, name='competitions'),
    path('competition/details', views.competition_details, name='competition_details'),
    path('task/list', views.tasks, name='tasks'),
    path('task/details', views.task_details, name='task_details'),
    path('solution/list', views.solutions, name='solutions'),
    path('solution/details', views.solution_details, name='solution_details'),
]
