# Generated by Django 5.1.3 on 2024-11-27 14:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_profile_certifications_profile_github_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='github',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='linkedn',
        ),
    ]
