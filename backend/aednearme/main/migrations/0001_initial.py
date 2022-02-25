# Generated by Django 4.0.2 on 2022-02-25 14:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Defib',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('long', models.CharField(max_length=50)),
                ('lat', models.CharField(max_length=50)),
                ('photo_url', models.CharField(max_length=50, null=True)),
                ('time_taken', models.DateTimeField(auto_now_add=True)),
                ('access', models.CharField(choices=[('public', 'public'), ('limited', 'limited'), ('unknown', 'unknown')], default='unknown', max_length=50)),
                ('approved', models.BooleanField(default=False)),
                ('user_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
