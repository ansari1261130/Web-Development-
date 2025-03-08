from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=100)
    linkedin = models.URLField(max_length=300,default="", blank=True)
    github = models.URLField(max_length=300,default="", blank=True)
    phone = models.CharField(max_length=10) 
    location = models.CharField(max_length=500,default="", blank=True)
    introduction = models.TextField(max_length=500)
    degree = models.CharField(max_length=300)  
    school = models.CharField(max_length=300)
    university = models.CharField(max_length=300)
    experience = models.TextField(max_length=1000)
    skills = models.CharField(max_length=1000)
    certifications = models.CharField(max_length=1000,default="", blank=True)
    projects = models.TextField(max_length=1000,default="", blank=True)

    def __str__(self):
        return self.name
