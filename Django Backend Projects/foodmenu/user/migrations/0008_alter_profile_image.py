# Generated by Django 5.1 on 2024-10-03 09:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0007_alter_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(default='media/profile_img.jpg', upload_to='profile_image'),
        ),
    ]
