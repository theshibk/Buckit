from __future__ import unicode_literals

from django.db import models

# Create your models here.
class List(models.Model)
	name = models.CharField(max_length=100)
	description = models.CharField(max_length=256)
	created = models.DateField()

class Event(models.Model)
	name = models.CharField(max_length=100)
	description = models.CharField(max_length=256)
	created = models.DateField()
	list = models.ForeignKey('List', on_delete=models.CASCADE)
