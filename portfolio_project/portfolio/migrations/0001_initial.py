# Generated by Django 5.2.1 on 2025-05-16 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('Image', models.ImageField(upload_to='images/')),
                ('url', models.URLField(blank=True)),
            ],
        ),
    ]
