# Generated by Django 4.0.2 on 2022-03-01 10:03

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
            name='Quiz',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quiz_subject', models.CharField(max_length=50)),
                ('question_1', models.TextField(max_length=150)),
                ('question_2', models.TextField(max_length=150)),
                ('question_3', models.TextField(max_length=150)),
                ('question_4', models.TextField(max_length=150)),
                ('question_5', models.TextField(max_length=150)),
                ('question_6', models.TextField(max_length=150)),
                ('correct_answer_1', models.TextField()),
                ('correct_answer_2', models.TextField()),
                ('correct_answer_3', models.TextField()),
                ('correct_answer_4', models.TextField()),
                ('correct_answer_5', models.TextField()),
                ('correct_answer_6', models.TextField()),
                ('incorrect_answers_1', models.TextField()),
                ('incorrect_answers_2', models.TextField()),
                ('incorrect_answers_3', models.TextField()),
                ('incorrect_answers_4', models.TextField()),
                ('incorrect_answers_5', models.TextField()),
                ('incorrect_answers_6', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='User_Quiz',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('completed', models.BooleanField(default=False)),
                ('quiz_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='quiz.quiz')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
