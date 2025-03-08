# Generated by Django 5.1.3 on 2024-11-20 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_alter_profile_phone'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='certifications',
            field=models.CharField(blank=True, default='', max_length=1000),
        ),
        migrations.AddField(
            model_name='profile',
            name='github',
            field=models.URLField(blank=True, default='', max_length=300),
        ),
        migrations.AddField(
            model_name='profile',
            name='linkedn',
            field=models.URLField(blank=True, default='', max_length=300),
        ),
        migrations.AddField(
            model_name='profile',
            name='location',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
        migrations.AddField(
            model_name='profile',
            name='projects',
            field=models.TextField(blank=True, default='', max_length=1000),
        ),
        migrations.AlterField(
            model_name='profile',
            name='degree',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='profile',
            name='experience',
            field=models.TextField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='profile',
            name='school',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='profile',
            name='skills',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='profile',
            name='university',
            field=models.CharField(max_length=300),
        ),
    ]
