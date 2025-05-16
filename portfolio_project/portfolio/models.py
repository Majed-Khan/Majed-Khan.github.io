from django.db import models

# Create your models here.

class project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    Image = models.ImageField(upload_to='images/')
    url = models.URLField(blank=True)

    def _str_(self):
        return self.title