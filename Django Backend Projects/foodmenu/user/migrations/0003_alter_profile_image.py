# Generated by Django 5.1 on 2024-09-28 08:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_alter_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(default='profile_img.jpg', upload_to='profile_image'),
        ),
    ]
