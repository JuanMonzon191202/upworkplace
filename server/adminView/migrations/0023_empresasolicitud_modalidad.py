# Generated by Django 4.1.5 on 2023-06-12 18:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminView', '0022_propuesta_alta'),
    ]

    operations = [
        migrations.AddField(
            model_name='empresasolicitud',
            name='modalidad',
            field=models.CharField(blank=True, max_length=50, verbose_name='modalidad'),
        ),
    ]