# Generated by Django 4.1.3 on 2023-04-20 19:25

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mess', '0003_rename_time_silvertoken_tokentime_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='noteatingtoday',
            name='day',
        ),
        migrations.RemoveField(
            model_name='noteatingtoday',
            name='isRecurring',
        ),
        migrations.AddField(
            model_name='noteatingtoday',
            name='date',
            field=models.DateField(default=datetime.date(2023, 4, 20)),
        ),
    ]
