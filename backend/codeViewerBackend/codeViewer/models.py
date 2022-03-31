from django.db import models


class CompetitionSeries(models.Model):
    name = models.CharField(max_length=200, primary_key=True)
    link = models.CharField(max_length=200, null=True)
    objects = models.Manager()


class Competition(models.Model):
    series = models.ForeignKey(CompetitionSeries, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, primary_key=True)
    date = models.DateField('date of competition', null=True)
    link = models.CharField(max_length=200, null=True, blank=True)
    objects = models.Manager()


TAG_CHOICES = [
        ('Empty', 'Empty'),
        ('Graph', 'Graph'),
        ('DFS', 'DFS'),
    ]


class Task(models.Model):
    competition = models.ForeignKey(Competition, on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True)
    order = models.CharField(max_length=10, default=1)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=1200, null=True, blank=True)
    link = models.CharField(max_length=200, null=True, blank=True)
    comment = models.CharField(max_length=1200, null=True, blank=True)
    tag = models.CharField(max_length=50, choices=TAG_CHOICES, default='Empty', null=True)
    objects = models.Manager()


class Solution(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True)
    code = models.CharField(max_length=200)
    objects = models.Manager()
