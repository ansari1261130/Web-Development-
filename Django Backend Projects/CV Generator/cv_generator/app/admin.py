from django.contrib import admin
from .models import Profile


class AdminResume(admin.ModelAdmin):
    list_display = ('id','name',)  
    list_display_links = ('name',)

admin.site.register(Profile, AdminResume)
